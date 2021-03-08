import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as  PokemonsActions from '../actions/pokemons.action';
import { PokemonService } from '../../core/services/pokemon.service';

@Injectable()
export class PokemonsEffects {

    loadPokemons$ = createEffect(() => this.actions$.pipe(
        ofType(PokemonsActions.GetPokemons.type),
        mergeMap((action) => this.pokemonService.getPokemon(action.offset).pipe(
            map((response) => PokemonsActions.GetPokemonsSuccess({ payload: response })),
            catchError(() => of(PokemonsActions.GetPokemonsFail()))
        ))
    ));

    loadPokemonDetails$ = createEffect(() => this.actions$.pipe(
        ofType(PokemonsActions.GetPokemonDetails.type),
        mergeMap((action) => this.pokemonService.getPokeDetails(action.id).pipe(
            map((response) => PokemonsActions.GetPokemonDetailsSuccess({ payload: response })),
            catchError(() => of(PokemonsActions.GetPokemonDetailsFail()))
        ))
    ));

    loadPokemonsTypes$ = createEffect(() => this.actions$.pipe(
        ofType(PokemonsActions.GetPokemonsTypes.type),
        mergeMap(() => this.pokemonService.getPokemonTypes().pipe(
            map((response) => PokemonsActions.GetPokemonsTypesSuccess({ pokemonsTypes: response })),
            catchError(() => of(PokemonsActions.GetPokemonsTypesFail()))
        ))
    ));

    loadPokemonsByType$ = createEffect(() => this.actions$.pipe(
        ofType(PokemonsActions.SearchPokemonByType.type),
        mergeMap((action) => this.pokemonService.serchPokemonsByType(action.searchType).pipe(
            map((response) => PokemonsActions.SearchPokemonByTypeSuccess({ payload: response })),
            catchError(() => of(PokemonsActions.SearchPokemonByTypeFail()))
        ))
    ));

    constructor(
        private actions$: Actions<PokemonsActions.PokemonsActionsUnion>,
        private pokemonService: PokemonService
    ) { }
}