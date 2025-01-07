import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CategoriesScreen from "../screens/categories-screen";
import MealOverviewScreen from "../screens/meal-overview-screen";
import MealDetailsScreen from "../screens/meals-details-screen";
import { RootStackParamList } from "./types";

const Stack = createStackNavigator<RootStackParamList>();

export default function StackNavigation() {
  const stackScreenOptions = {
    headerTintColor: "white",
    headerStyle: { backgroundColor: "#653700" },
  };

  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="Meals Overview" component={MealOverviewScreen} />
      <Stack.Screen name="Meal Details" component={MealDetailsScreen} />
    </Stack.Navigator>
  );
}
