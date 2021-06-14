export default {
  SET_POKEMON: (state, pokemon) => state.pokemon.list = [...state.pokemon.list, ...pokemon],
  UPDATE_POKEMON_LIST: (state, pokemon) => state.pokemon.list = [...pokemon],
  SET_PAGINATION: (state, pagination) => state.pokemon.pagination = { ...state.pokemon.pagination, ...pagination },
  SET_ACTIVE_POKEMON: (state, activePokemon) => state.pokemon.active = { ...state.pokemon.active, ...activePokemon },
  CLEAR_ACTIVE_POKEMON: (state) => state.pokemon.active = null,
}