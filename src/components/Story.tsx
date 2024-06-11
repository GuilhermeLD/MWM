import { useState } from "react";
import { StyleSheet, Image, Text, View, TextInput } from "react-native";
import usersStories from '@/StoriesImg';
import { SafeAreaView } from "react-native-safe-area-context";


export default function Story() {
  const [userIndex, setUserIndex] = useState(0);
  const [storyIndex, setStoryIndex] = useState(0);

  const user = usersStories[userIndex];
  const story = user.stories[storyIndex];
  const uri = 'https://i.imgur.com/UuKPAV8.jpeg'
 

  // Formato que esta no video, mas esta conflitando no meu codigo - ESTUDDAR ISSO1!! 
  // const story = user[userIndex];

  return (
    <SafeAreaView style={{flex:1, backgroundColor: 'black' }}>
      <View className="flex-auto ">

        <Image source={{ uri: story.uri }} className="h-full rounded-lg"/>

          <View className="absolute bg-black/25 w-full top-0 p-5">
              <Text className="color-white font-title text-xl">{user.date}</Text>  
          </View>

          <View className="w-full bg-black p-3">
           <TextInput className="border-2 border-gray-500 p-4 rounded-[50px] color-white font-text" placeholder="Enviar mensagem" placeholderTextColor='white'/>
          </View>
      </View>
      
    </SafeAreaView>

  );
}


