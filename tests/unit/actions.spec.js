jest.mock('../../src/api')

import { PokemonService } from '../../src/api';
import { PokemonList } from '../pokemonList';
import actions from '../../src/store/actions';

describe('Store Actions', () => {

  it('Sets the list of Pokemon with setPokemon action', async () => {
    PokemonService.getPokemon.mockResolvedValue(PokemonList);
    const commit = jest.fn();
    await actions.setPokemon({ commit });
    expect(commit).toHaveBeenCalledWith('SET_POKEMON', PokemonList.results);
    expect(commit).toHaveBeenCalledWith('SET_PAGINATION', {
      previous: null,
      next: null,
    });
  });
});