import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, Text, View } from "react-native";
import MealShortDescription from "./meal-short-description";

type MealItemProps = {
  id: string;
  title: string;
  imageUrl: string;
  affordability: string;
  complexity: string;
  duration: number;
};

export default function MealItem(props: MealItemProps) {
  const navigation = useNavigation();

  function handleOnPress() {
    navigation.navigate("Meal Details", { id: props.id });
  }

  return (
    <View className="m-6 flex-1 rounded-xl border border-gray-600 bg-white shadow-lg">
      <Pressable
        android_ripple={{ color: "white" }}
        onPress={handleOnPress}
        className="flex-1 rounded-t-xl active:opacity-90"
      >
        <Image
          source={{ uri: props.imageUrl }}
          className="h-[180px] w-full flex-1 rounded-t-xl"
        />
        <View className="mx-6 my-6 flex-1">
          <Text className="text-lg font-bold">{props.title}</Text>
          <MealShortDescription className="mt-2" {...props} />
        </View>
      </Pressable>
    </View>
  );
}
