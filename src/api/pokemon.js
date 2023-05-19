import { API_HOST } from "../utils/constants";

export async function getPokemonApi(endpointUrl) {
  try {
    const urlGetPokemon = `${API_HOST}/pokemon?limit=20&offset=0`;
    const response = await fetch(endpointUrl || urlGetPokemon);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getPokemonDetailsApi(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
