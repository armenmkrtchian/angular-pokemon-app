import { createReducer, on } from '@ngrx/store';
import * as PokemonsActions from '../actions/pokemons.action';
import { ILoadingState } from '../state/state';

export interface PokemonsState extends ILoadingState {
    pokemons: Array<any>;
    pokemonDetails: any;
    pokemonsTypes: Array<any>;
    searchedPokemonsByTypes: Array<any>;
}

export const initialState: PokemonsState = {
    pokemons: null,
    pokemonDetails: null,
    pokemonsTypes: null,
    searchedPokemonsByTypes: null,
    isLoading: false,
};

const pokemonsReducer = createReducer(
    initialState,
    on( PokemonsActions.GetPokemons,
        PokemonsActions.GetPokemonDetails,
        PokemonsActions.GetPokemonsTypes,
        PokemonsActions.SearchPokemonByType, state => ({ ...state, isLoading: true, })),

    on( PokemonsActions.GetPokemonsSuccess, (state, action) => {
        return ({
            ...state,
            pokemons: [...action.payload],
            isLoading: false,
        })
    }),
    on( PokemonsActions.SearchPokemonByTypeSuccess, (state, action) => {
        return ({
            ...state,
            searchedPokemonsByTypes: [...action.payload],
            isLoading: false,
        })
    }),
    on( PokemonsActions.GetPokemonDetailsSuccess, (state, action) => {
        return ({
            ...state,
            pokemonDetails: { ...action.payload },
            isLoading: false,
        })
    }),

    on( PokemonsActions.GetPokemonsTypesSuccess, (state, action) => {
        return ({
            ...state,
            pokemonsTypes: [...action.pokemonsTypes ],
            isLoading: false,
        })
    }),

    on( PokemonsActions.GetPokemonsFail,
        PokemonsActions.GetPokemonDetailsFail,
        PokemonsActions.GetPokemonsTypesFail,
        PokemonsActions.SearchPokemonByTypeFail, state => ({ ...state, isLoading: false, })),
);

export function reducer(state: PokemonsState | undefined, action: PokemonsActions.PokemonsActionsUnion) {
    return pokemonsReducer(state, action);
}

