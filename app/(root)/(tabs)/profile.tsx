import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="flex-1 justify-center items-center">
        <Text className="text-3xl font-rubik-bold text-black-300">Profile</Text>
        <Text className="text-lg font-rubik text-black-100 mt-2">
          User settings and preferences
        </Text>
      </View>
    </SafeAreaView>
  );
}
