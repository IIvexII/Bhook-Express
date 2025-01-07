import React from "react";
import { FlatList } from "react-native";

import MealItem from "./meal-item";
import Meal from "../models/meal";

type MealsListProps = {
    meals: Meal[]
}

export default function MealsList(props: MealsListProps) {
  return (
    <FlatList
      data={props.meals}
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
  );
}
