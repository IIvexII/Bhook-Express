import React from "react";
import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoriesItem from "../components/category-item";

export default function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <CategoriesItem id={item.id} title={item.title} color={item.color} />
      )}
      numColumns={2}
      className="bg-orange-950"
    />
  );
}
