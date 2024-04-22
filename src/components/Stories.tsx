import { Image, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";



export default function Stories() {
  return (
<>
<View className="top-28 w-full h-auto px-4 flex flex-row">
  <Text className="flex-1 font-text text-xl">fotos favoritas</Text>
  <Text className="font-text text-lg">view all</Text>
</View>
<ScrollView horizontal className="top-32 px-4 w-full flex-row gap-3 p-1">
  <View className="pr-1">
    <Image source={require('@/img/stories.png')} className="size-20 rounded-full"/>
    <Text className="text-center text-lg font-light pt-1">2020</Text>
  </View>

  <View className="px-1">
    <Image source={require('@/img/stories.png')} className="size-20 rounded-full"/>
    <Text className="text-center text-lg font-light pt-1">2021</Text>
  </View>

  <View className="px-1">
    <Image source={require('@/img/stories.png')} className="size-20 rounded-full"/>
    <Text className="text-center text-lg font-light pt-1">2022</Text>
  </View>

  <View className="px-1">
    <Image source={require('@/img/stories.png')} className="size-20 rounded-full"/>
    <Text className="text-center text-lg font-light pt-1">2023</Text>
  </View>

  <View className="px-1">
    <Image source={require('@/img/stories.png')} className="size-20 rounded-full"/>
    <Text className="text-center text-lg font-light pt-1">2024</Text>
  </View>

  <View className="px-1">
    <Image source={require('@/img/stories.png')} className="size-20 rounded-full"/>
    <Text className="text-center text-lg font-light pt-1">2025</Text>
  </View>

</ScrollView>  
</>

  )
}

