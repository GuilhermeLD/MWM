import { Image, Text, TouchableOpacity, View } from "react-native";

export default function mwm() {
  return (
    <View className="flex top-40 justify-center items-center">
      <Image source={require("@/img/mwm.png")} className="" />
      <View className="flex flex-row gap-10 mt-10">
        <TouchableOpacity className="bg-third px-8 h-10 w-32 rounded-full flex items-center justify-center">
          <Text className="text-white text-2xl font-text ">sim</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-third px-8 h-10 w-32 rounded-full flex items-center justify-center">
          <Text className="text-white text-2xl font-text ">sim</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
