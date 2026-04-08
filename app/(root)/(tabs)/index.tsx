import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="flex-1 justify-center items-center">
        <Text className="text-3xl font-rubik-bold text-black-300">Home</Text>
        <Text className="text-lg font-rubik text-black-100 mt-2">
          Property listings will appear here
        </Text>
      </View>
    </SafeAreaView>
  );
}
