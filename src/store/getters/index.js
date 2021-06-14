export default {
  getPokemon: (state) => state.pokemon.list,
  getActivePokemon: (state) => state.pokemon.active,
  getPagination: (state) => state.pokemon.pagination,
}