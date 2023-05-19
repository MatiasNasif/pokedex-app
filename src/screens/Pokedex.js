import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { getPokemonApi, getPokemonDetailsApi } from "../api/pokemon";
import PokemonList from "../components/PokemonList";

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonApi();

      const pokemonArray = [];

      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsApi(pokemon.url);

        pokemonArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image:
            pokemonDetails.sprites.other["official-artwork"].front_default,
        });
      }

      setPokemons([...pokemons, ...pokemonArray]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView>
      <PokemonList pokemons={pokemons} />
    </SafeAreaView>
  );
}
