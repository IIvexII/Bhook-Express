import { View, Text, FlatList } from "react-native";
import React from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/meal-item";

type MealOverviewScreenRouteProp = RouteProp<
  RootStackParamList,
  "Meals Overview"
>;

export default function MealOverviewScreen() {
  const route = useRoute<MealOverviewScreenRouteProp>();

  const id = route.params.id;
  const title = route.params.title;

  const meals = MEALS.filter((meal) => meal.categoryIds.includes(id));

  return (
    <View>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          // Single Meal Item Card
          <MealItem
            title={item.title}
            imageUrl={item.imageUrl}
            affordability={item.affordability}
            complexity={item.complexity}
            duration={item.duration}
          />
        )}
      />
    </View>
  );
}
