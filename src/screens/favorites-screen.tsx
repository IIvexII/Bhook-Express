import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import MealsList from '../components/meals-list'
import { MEALS } from '../data/dummy-data'
import { FavoriteMealsContext } from '../store/context/favorite-meals';

export default function FavoritesScreen() {
  const favoriteMealIds = useContext(FavoriteMealsContext);

  const favMeals = MEALS.filter(meal => favoriteMealIds.favoriteMeals.includes(meal.id));

  return (
    <View className="flex-1 bg-orange-950 pt-16">
      <MealsList meals={favMeals} />
    </View>
  )
}