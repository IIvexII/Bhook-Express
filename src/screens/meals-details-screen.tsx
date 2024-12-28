import { View, Text, Image, FlatList } from "react-native";
import React, { useLayoutEffect } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

import { RootStackParamList } from "../navigation/types";
import { MEALS } from "../data/dummy-data";
import MealShortDescription from "../components/meal-short-description";
import List from "../components/list";
import Subtitle from "../components/subtitle";
import IconButton from "../components/icon-button";
import { shortenText } from "../lib/utils";

type MealDetailsScreenRouteProp = RouteProp<RootStackParamList, "Meal Details">;

export default function MealDetailsScreen() {
  const route = useRoute<MealDetailsScreenRouteProp>();
  const navigation = useNavigation();

  const meal = MEALS.find((meal) => meal.id === route.params.id);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: shortenText(meal?.title || "Meals Details", 20),
      headerRight: () => <IconButton name="star" size={30} color="white" />,
    });
  });

  if (!meal) {
    return (
      <View>
        <Text>Meal details not found!</Text>
      </View>
    );
  }

  return (
    <FlatList
      className="min-h-full w-full flex-1 bg-orange-950 px-6 py-12"
      data={[]}
      renderItem={() => null}
      ListHeaderComponent={() => (
        <View className="mb-16">
          <Image
            source={{ uri: meal.imageUrl }}
            className="h-72 w-full rounded-3xl border border-gray-600"
            resizeMode="cover"
          />
          <View className="mt-6">
            <Text className="text-center text-2xl text-white">
              {meal.title}
            </Text>

            {/* Short Description */}
            <MealShortDescription
              className="mt-4 justify-center"
              textClassName="text-white text-base font-light"
              duration={meal.duration}
              complexity={meal.complexity}
              affordability={meal.affordability}
            />

            {/* Ingridients */}
            <View className="mt-4">
              <Subtitle className="mt-4">Ingredients</Subtitle>
              <List data={meal.ingredients} className="mt-4" />
            </View>
            <View className="mt-4">
              <Subtitle className="mt-4">Ingredients</Subtitle>
              <List data={meal.ingredients} className="mt-4" />
            </View>
          </View>
        </View>
      )}
    />
  );
}
