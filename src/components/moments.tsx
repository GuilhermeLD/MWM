import { MaterialIcons } from "@expo/vector-icons";
import { Link, useLocalSearchParams } from "expo-router";
import { Image, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import textMoments from "@/TextMoments";



export default function Moments() {
  const { slug } = useLocalSearchParams();
  const moment = textMoments.filter(textMoment => textMoment.slug === slug)[0]

  return (
  <ScrollView>
    <View className="px-4 pb-16 w-full top-16 flex items-left">
    <Link href='/past' asChild>
      <MaterialIcons name="arrow-back-ios-new" color={'#536C51'} size={20}/> 
    </Link>
      <View className="flex  items-center mt-4">
        <Text className="font-bold text-4xl">{moment.title}</Text>
        <Text className="font-light text-lg -mt-2 mb-7">{moment.date}</Text>
      </View>
      <Image source={{ uri: moment.img}} className="w-full h-80 flex justify-center content-center mb-5" />
      <Text  className="font-text text-justify text-xl">{moment.text}</Text>
    </View>
  </ScrollView>
)}