import {
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Platform,
} from "react-native";
import React from "react";
import PokemonCard from "./PokemonCard";

export default function PokemonList(props) {
  const { pokemons, loadPokemons, nextUrl } = props;

  const LoadMore = () => {
    loadPokemons();
  };

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentContainer}
      onEndReached={nextUrl && LoadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        nextUrl && <ActivityIndicator size="large" style={styles.spinner} />
      }
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
    marginTop: Platform.OS === "android" ? 50 : 20,
  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === "android" ? 120 : 60,
    color: "#AEAEAE",
  },
});
