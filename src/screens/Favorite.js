import React, { useState, useCallback } from "react";
import { Text, SafeAreaView } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { getPokemonFavoritesApi } from "../api/favorite";
import { getPokemonDetail } from "../api/pokemon";
import useAuth from "../hooks/useAuth";
import PokemonList from "../components/PokemonList";

export default function Favorite() {
  const [pokemons, setPokemons] = useState([]);
  const { auth } = useAuth();

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          try {
            const response = await getPokemonFavoritesApi();
            const pokemonArray = [];

            for await (const id of response) {
              const pokemonDetails = await getPokemonDetail(id);

              pokemonArray.push({
                id: pokemonDetails.id,
                name: pokemonDetails.name,
                type: pokemonDetails.types[0].type.name,
                order: pokemonDetails.order,
                image:
                  pokemonDetails.sprites.other["official-artwork"]
                    .front_default,
              });
            }
            setPokemons(pokemonArray);
          } catch (error) {
            console.error(error);
          }
        })();
      }
    }, [auth])
  );

  return (
    <SafeAreaView>
      {auth ? (
        <PokemonList pokemons={pokemons} />
      ) : (
        <Text>Usuario no logueado</Text>
      )}
    </SafeAreaView>
  );
}
