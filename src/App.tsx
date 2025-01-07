import "./styles/global.css";

import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import { FavoriteMealsProvider } from "./store/context/favorite-meals";
import StackNavigation from "./navigation/stack-navigation";

const Tabs = createBottomTabNavigator();

export default function App() {
  const tabsOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarStyle: {
      backgroundColor: "#653700",
      flexDirection: "row",
    },
    tabBarActiveTintColor: "white",
    tabBarInactiveTintColor: "rgba(255, 255, 255, 0.5)",
  };

  return (
    <>
      <NavigationContainer>
        <FavoriteMealsProvider>
          <Tabs.Navigator screenOptions={tabsOptions}>
            {/* home screen */}
            <Tabs.Screen
              name="Home"
              component={StackNavigation}
              options={{
                tabBarIcon: ({ color }) => (
                  <Ionicons name={"home"} size={24} color={color} />
                ),
              }}
            />
            {/* home screen */}
            <Tabs.Screen
              name="Favorites"
              component={StackNavigation}
              options={{
                tabBarIcon: ({ color }) => (
                  <Ionicons name={"star"} size={24} color={color} />
                ),
              }}
            />
          </Tabs.Navigator>
        </FavoriteMealsProvider>
      </NavigationContainer>
      <StatusBar style="light" />
    </>
  );
}
