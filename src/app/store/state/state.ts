import { PokemonsState } from '../reducers/pokemons.reducer';

export interface ILoadingState {
    isLoading: boolean;
}

export interface AppState {
    pokemons: PokemonsState;
}
