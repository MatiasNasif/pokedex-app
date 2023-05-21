import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import PokedexNavigation from "./PokedexNavigation";
import Account from "../screens/Account";
import FavoriteNavigation from "./FavoriteNavigation";
import Icon from "react-native-vector-icons/FontAwesome5";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator initialRouteName="Pokedex">
      <Tab.Screen
        name="Favorite"
        component={FavoriteNavigation}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Pokedex"
        component={PokedexNavigation}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderPokeBall(),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          headerTitle: "Mi cuenta",
          tabBarLabel: "Mi cuenta",
          headerTitleAlign: "center",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

function renderPokeBall() {
  return (
    <Image
      source={require("../assets/pokeball.png")}
      style={{
        width: 75,
        height: 75,
        top: -15,
      }}
    />
  );
}

export default Navigation;
