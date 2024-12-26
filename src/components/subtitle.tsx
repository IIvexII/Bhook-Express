import { View, Text } from "react-native";
import React from "react";

type SubtitleProps = {
  className?: string;
  children: React.ReactNode;
};

export default function Subtitle(props: SubtitleProps) {
  return (
    <Text
      className={`w-full border-b-4 border-orange-100 pb-2 text-center text-2xl text-orange-100 ${props.className}`}
    >
      {props.children}
    </Text>
  );
}
