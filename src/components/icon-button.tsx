import { View, Text, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

type IconButtonProps = {
  name: "star" | "staro";
  size: number;
  color: string;
  className?: string;

  onPress?: () => void;
};

export default function IconButton(props: IconButtonProps) {
  return (
    <Pressable className="mr-4" onPress={props.onPress}>
      <AntDesign name={props.name} size={props.size} color={props.color} />
    </Pressable>
  );
}
