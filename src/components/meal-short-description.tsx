import { View, Text } from "react-native";
import React from "react";

type MealShortDescriptionProps = {
  className?: string;
  textClassName?: string;
  duration: number;
  complexity: string;
  affordability: string;
};

export default function MealShortDescription(props: MealShortDescriptionProps) {
  return (
    <View className={`flex-row gap-4 ${props.className}`}>
      <Text className={`text-sm ${props.textClassName}`}>
        {props.duration}m
      </Text>
      <Text className={`text-sm uppercase ${props.textClassName}`}>
        {props.complexity}
      </Text>
      <Text className={`text-sm capitalize ${props.textClassName}`}>
        {props.affordability}
      </Text>
    </View>
  );
}
