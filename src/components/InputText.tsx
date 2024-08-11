import { Text, TouchableOpacity, View } from "react-native";
import { Button } from "./Button";
import { Avatar, AvatarImage } from "./Avatar";
import { TextInput } from "react-native-gesture-handler";
import { Link } from "expo-router";

export default function InputText() {
  return(
    <>
    <View className="top-44 px-4 flex flex-row gap-4">
      <Avatar className="size-14">
        <AvatarImage source={require('@/img/stories.png')}/>
      </Avatar>
        <TextInput placeholder="escreva o que você deseja para o futuro comigo" placeholderTextColor={"#B7B7B7"} className="w-80 h-12 font-light text-lg justify-center content-center -top-1"/>
        </View>
      <View className="top-[142px] fixed pl-72 font-text">
          <Link href='/mwm' asChild>
            <TouchableOpacity className="bg-third px-8 h-8 w-32 rounded-full flex items-center justify-center">
                <Text className="text-white text-xl font-text ">
                  publicar
                </Text>
              </TouchableOpacity>
          </Link>
        </View>
        
  
      </>
 
 
  )
}