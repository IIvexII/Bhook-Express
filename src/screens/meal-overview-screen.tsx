import { View, FlatList } from "react-native";
import React, { useLayoutEffect } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/meal-item";

type MealOverviewScreenRouteProp = RouteProp<
  RootStackParamList,
  "Meals Overview"
>;

export default function MealOverviewScreen() {
  const route = useRoute<MealOverviewScreenRouteProp>();
  const navigation = useNavigation();

  const id = route.params.id;

  // change the title of the screen
  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.title,
    });
  });

  const meals = MEALS.filter((meal) => meal.categoryIds.includes(id));

  return (
    <View className="flex-1 bg-orange-950 pt-6">
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          // Single Meal Item Card
          <MealItem
            id={item.id}
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
