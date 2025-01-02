import "./styles/global.css";

import React from "react";
import { StatusBar } from "expo-status-bar";
import CategoriesScreen from "./screens/categories-screen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import MealOverviewScreen from "./screens/meal-overview-screen";
import MealDetailsScreen from "./screens/meals-details-screen";
import { FavoriteMealsProvider } from "./store/context/favorite-meals";

type RootStackParamList = {
  Categories: undefined;
  "Meals Overview": { title: string } | undefined;
  "Meal Details": { id: string } | undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  // screen options for all screens in the stack
  const stackScreenOptions = {
    headerTintColor: "white",
    headerStyle: { backgroundColor: "#653700" },
  };

  return (
    <>
      <NavigationContainer>
        <FavoriteMealsProvider>
          <Stack.Navigator screenOptions={stackScreenOptions}>
            <Stack.Screen name="Categories" component={CategoriesScreen} />
            <Stack.Screen name="Meals Overview" component={MealOverviewScreen} />
            <Stack.Screen name="Meal Details" component={MealDetailsScreen} />
          </Stack.Navigator>
        </FavoriteMealsProvider>
      </NavigationContainer>
      <StatusBar style="light" />
    </>
  );
}
