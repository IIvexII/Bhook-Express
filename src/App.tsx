import "./styles/global.css";

import React from "react";
import { StatusBar } from "expo-status-bar";
import CategoriesScreen from "./screens/categories-screen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import MealOverviewScreen from "./screens/meal-overview-screen";
import MealDetailsScreen from "./screens/meals-details-screen";

type RootStackParamList = {
  Categories: undefined;
  "Meals Overview": { title: string } | undefined;
  "Meal Details": { id: string } | undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: "white",
            headerStyle: { backgroundColor: "#653700" },
          }}
        >
          <Stack.Screen name="Categories" component={CategoriesScreen} />
          <Stack.Screen name="Meals Overview" component={MealOverviewScreen} />
          <Stack.Screen name="Meal Details" component={MealDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </>
  );
}
