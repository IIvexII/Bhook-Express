import { View, Text, FlatList } from "react-native";
import React from "react";

type ListProps = {
  className?: string;
  data: string[];
};

export default function List(props: ListProps) {
  return (
    <FlatList
      className={props.className}
      data={props.data}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <Text className="mb-2 rounded-xl bg-orange-100 p-2 text-center">
          {item}
        </Text>
      )}
    />
  );
}
