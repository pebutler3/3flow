import axios from 'axios';
import * as PokemonService from './pokemonService';

axios.interceptors.response.use((response) => {
  return response;
}, (error) => {
  return Promise.reject(error);
});

export {
  PokemonService,
}