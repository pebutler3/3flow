import { PokemonService } from '../../api';

export default {
  setPokemon: async ({ commit }) => {
    const { previous, next, results } = await PokemonService.getPokemon();
    const pokemon = results;
    commit('SET_POKEMON', pokemon);
    commit('SET_PAGINATION', {
      previous,
      next
    });
  },
  setActivePokemon: async ({ commit }, url) => {
    const pokemon = await PokemonService.getActivePokemon(url);
    commit('SET_ACTIVE_POKEMON', pokemon);
  },
  clearActivePokemon: ({ commit }) => commit('CLEAR_ACTIVE_POKEMON'),
  // TODO: Make a single pagination Action instead of next/previous
  paginateNext: async ({ commit, state }) => {
    const { next } = state.pokemon.pagination;
    const data = await PokemonService.getNextPokemonGroup(next);
    const pokemon = data.results;
    commit('UPDATE_POKEMON_LIST', pokemon);
    commit('SET_PAGINATION', {
      next: data.next,
      previous: data.previous
    });
  },
  paginatePrevious: async ({ commit, state }) => {
    const { previous } = state.pokemon.pagination;
    const data = await PokemonService.getPreviousPokemonGroup(previous);
    const pokemon = data.results;
    commit('UPDATE_POKEMON_LIST', pokemon);
    commit('SET_PAGINATION', {
      next: data.next,
      previous: data.previous
    });
  }
}