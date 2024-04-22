import { Image, View } from "react-native";

export default function Header() {
  return(
    <View className=" justify-center items-center">
      <Image source={require('@/img/logo.png')} className="flex absolute top-10 left-0 -ml-4" />
    </View>
  )
}