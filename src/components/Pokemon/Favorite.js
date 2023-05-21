import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function Favorite(props) {
  const { id } = props;
  const addFavorite = () => {
    console.log("favorito");
  };
  return (
    <View>
      <Icon
        name="heart"
        color="#fff"
        size={20}
        onPress={addFavorite()}
        style={{ marginRight: 20 }}
      />
    </View>
  );
}
