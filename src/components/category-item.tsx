import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Pressable } from "react-native";

type CategoriesItemProps = {
  id: string;
  title: string;
  color: string;
};

export default function CategoriesItem(props: CategoriesItemProps) {
  const navigation = useNavigation();

  function handleOnPress() {
    navigation.navigate("Meals Overview", {
      id: props.id,
      title: props.title,
    });
  }

  return (
    <View className="m-4 h-[150px] flex-1 rounded-xl">
      <Pressable
        style={{ backgroundColor: props.color }}
        android_ripple={{ color: "white" }}
        onPress={handleOnPress}
        className="flex-1 items-center justify-center rounded-xl active:opacity-90"
      >
        <Text className="text-lg font-bold">{props.title}</Text>
      </Pressable>
    </View>
  );
}
