import "./styles/global.css";

import React from "react";
import { StatusBar } from "expo-status-bar";
import CategoriesScreen from "./screens/categories-screen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import MealOverviewScreen from "./screens/meal-overview-screen";

type RootStackParamList = {
  Categories: undefined;
  "Meals Overview": { title: string } | undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Categories" component={CategoriesScreen} />
          <Stack.Screen name="Meals Overview" component={MealOverviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="dark" />
    </>
  );
}
