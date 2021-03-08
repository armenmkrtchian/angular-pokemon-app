import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BaseComponent } from '../core/base-component';
import { GetPokemonDetails } from '../store/actions/pokemons.action';
import { getPokemonDetails } from '../store/selectors/pokemons.selector';
import { AppState } from '../store/state/state';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {
  details$: Observable<any>;

  constructor(private route: ActivatedRoute, private store$: Store<AppState>) {}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');

    this.store$.dispatch(GetPokemonDetails({ id }));

    this.details$ = this.store$.pipe(select(getPokemonDetails()));
  }

}
