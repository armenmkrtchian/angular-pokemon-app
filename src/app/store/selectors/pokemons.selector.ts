import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../state/state';
import { PokemonsState } from '../reducers/pokemons.reducer';

export const selectPokemonsState = createFeatureSelector<AppState, PokemonsState>('pokemons');

export const getPokemons = () => createSelector(selectPokemonsState, state => state.pokemons);
export const getPokemonDetails = () => createSelector(selectPokemonsState, state => state.pokemonDetails);
export const getPokemonsTypes = () => createSelector(selectPokemonsState, state => state.pokemonsTypes);
export const searchedPokemonsByType = () => createSelector(selectPokemonsState, state => state.searchedPokemonsByTypes);