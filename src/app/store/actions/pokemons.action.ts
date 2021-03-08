import { props, createAction, union } from '@ngrx/store';

export const GetPokemons = createAction('[Pokemons] Get Pokemons', props<{ offset?: number }>());
export const GetPokemonsSuccess = createAction('[Pokemons] Get Pokemons Success', props<{ payload: Array<any> }>());
export const GetPokemonsFail = createAction('[Pokemons] Get Pokemons Fail');

export const GetPokemonDetails = createAction('[Pokemons] Get Pokemon Details', props<{ id: string }>());
export const GetPokemonDetailsSuccess = createAction('[Pokemons] Get Pokemon Details Success', props<{ payload: any }>());
export const GetPokemonDetailsFail = createAction('[Pokemons] Get Pokemon Details Fail');

export const GetPokemonsTypes = createAction('[Pokemons] Get Pokemon Types');
export const GetPokemonsTypesSuccess = createAction('[Pokemons] Get Pokemon Types Success', props<{ pokemonsTypes: any }>());
export const GetPokemonsTypesFail = createAction('[Pokemons] Get Pokemon Types Fail');

export const SearchPokemonByType = createAction('[Pokemons] Search Pokemon By Type', props<{ searchType: string }>());
export const SearchPokemonByTypeSuccess = createAction('[Pokemons] Search Pokemon By Type Success', props<{ payload: any }>());
export const SearchPokemonByTypeFail = createAction('[Pokemons] Search Pokemon By Type Fail');

export const PokemonsActionsAll = union({
    GetPokemons,
    GetPokemonsSuccess,
    GetPokemonsFail,

    GetPokemonDetails,
    GetPokemonDetailsSuccess,
    GetPokemonDetailsFail,

    GetPokemonsTypes,
    GetPokemonsTypesSuccess,
    GetPokemonsTypesFail,

    SearchPokemonByType,
    SearchPokemonByTypeSuccess,
    SearchPokemonByTypeFail,
});

export type PokemonsActionsUnion = typeof PokemonsActionsAll;