import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, View } from "react-native";

export default function FooterNav() {
  return (
      <View className="flex fixed bottom-10">
        <Pressable className="bg-fourth w-48 h-12 rounded-3xl ml-32 flex-row justify-between items-center align-middle gap-5">
          <MaterialIcons name="arrow-back-ios-new" color={'#fff'} size={20} className="pl-2" /> 
          <MaterialIcons name="home" color={'#fff'} size={20} className="" />
          <MaterialIcons name="arrow-forward-ios" color={'#fff'} size={20} className="pr-2" /> 
        </Pressable>
      </View>
  )
}