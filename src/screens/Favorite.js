import React from "react";
import { Text, SafeAreaView, Button } from "react-native";
import { getPokemonFavoritesApi } from "../api/favorite";

export default function Favorite() {
  const checkFavorites = async () => {
    const response = await getPokemonFavoritesApi();
    console.log(response);
  };

  return (
    <SafeAreaView>
      <Text>Favorite</Text>
      <Button title="Ver favoritos" onPress={checkFavorites} />
    </SafeAreaView>
  );
}
