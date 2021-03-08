import { AppState } from '../state/state';

export const getIsLoadingSelector = (state: AppState): boolean => {
    return state.pokemons.isLoading;
}