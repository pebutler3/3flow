import axios from 'axios';

const get = async (url) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const getPokemon = () => get('https://pokeapi.co/api/v2/pokemon/');
export const getActivePokemon = (url) => get(url);
export const getPreviousPokemonGroup = (previous) => get(previous);
export const getNextPokemonGroup = (next) => get(next);