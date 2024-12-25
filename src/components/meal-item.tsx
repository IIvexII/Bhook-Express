import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, Text, View } from "react-native";

type MealItemProps = {
  title: string;
  imageUrl: string;
  affordability: string;
  complexity: string;
  duration: number;
};

export default function MealItem(props: MealItemProps) {
  const navigation = useNavigation();

  function handleOnPress() {
    navigation.navigate("Categories");
  }

  return (
    <View className="m-4 flex-1 rounded-xl bg-white">
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

          <View className="mt-2 flex-row gap-4">
            <Text className="text-sm">{props.duration}m</Text>
            <Text className="text-sm uppercase">{props.complexity}</Text>
            <Text className="text-sm capitalize">{props.affordability}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}
