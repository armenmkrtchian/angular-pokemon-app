import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BaseComponent } from '../core/base-component';
import { GetPokemons, GetPokemonsTypes, SearchPokemonByType } from '../store/actions/pokemons.action';
import { getPokemons, getPokemonsTypes, searchedPokemonsByType } from '../store/selectors/pokemons.selector';
import { AppState } from '../store/state/state';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss']
})
export class PokemonsListComponent extends BaseComponent {

  offset = 0;
  pokemons = [];
  limitOfOffset = 1117; 
  searchType: string;
  pokemonsTypes$: Observable<any>;

  constructor(private store$: Store<AppState>) {
    super();
    this.store$.dispatch(GetPokemonsTypes());
    this.pokemonsTypes$ = this.store$.pipe(select(getPokemonsTypes()));
  }

  loadPokemon(event?: any): void {
    this.offset += 1;

    this.store$.dispatch(GetPokemons({ offset: this.offset }));

    this.subscriptions.push(
      this.store$.pipe(select(getPokemons())).subscribe(res => {
        if (res) {
          let result = res;

          this.pokemons = [...this.pokemons, ...result];

          if (event && event.target) {
            event.target.complete();
          }
        }
      }))
  }

  searchPokemonsByType(searchType: string): void {
    this.store$.dispatch(SearchPokemonByType({ searchType }));
    this.subscriptions.push(
      this.store$.pipe(select(searchedPokemonsByType())).subscribe(res => {
        if (res) {
          this.pokemons = res;
        }
      }))
  }
}
