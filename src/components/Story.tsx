import { useState } from "react";
import {
  Pressable,
  Image,
  Text,
  View,
  TextInput,
  StyleSheet,
} from "react-native";
import usersStories from "@/StoriesImg";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function Story() {
  const [userIndex, setUserIndex] = useState(0);
  const [storyIndex, setStoryIndex] = useState(0);

  const goToPrevStory = () => {
    setStoryIndex((index) => {
      if (index === 0) {
        GoToPrevUser();
        return 0;
      } else {
        return index - 1;
      }
    });
  };

  const GoToPrevUser = () => {
    setUserIndex((index) => {
      if (index === 0) {
        return usersStories.length - 1;
      }
      return index - 1;
    });
  };

  const goToNextStory = () => {
    setStoryIndex((index) => {
      if (index === user.stories.length - 1) {
        GoToNextUser();
        return 0;
      } else {
        return index + 1;
      }
    });
  };

  const GoToNextUser = () => {
    setUserIndex((index) => {
      if (index === usersStories.length - 1) {
        return 0;
      }
      return index + 1;
    });
  };

  const user = usersStories[userIndex];
  const story = user.stories[storyIndex];
  const uri = "https://i.imgur.com/UuKPAV8.jpeg";



  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <View className="flex-1 h-screen">
        <Image
          source={{ uri: story.uri }}
          className="h-full w-full rounded-lg"
        />

        <Pressable
          className="absolute w-4/12 h-full"
          onPress={() => goToPrevStory()}
        />
        <Pressable
          className="absolute w-4/12 h-full right-0"
          onPress={() => goToNextStory()}
        />

        <View className="absolute  w-full top-0 p-5 pt-1">
          <LinearGradient
            colors={["rgba(0,0,0,2.5)", "transparent"]}
            style={StyleSheet.absoluteFill}
          />

          <View className="flex-row gap-1 mb-5">
            {user.stories.map((story, index) => (
              <View
                key={story.uri}
                className={`flex-1 h-1 rounded-xl ${index <= storyIndex ? 'bg-white' : 'bg-gray-500'}`} 
              />
              // {backgroundColor index <= storyIndex ? 'ghostwhite' : 'gray'} - SETTAR ISSO COM O BINHO
            ))}
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="color-white font-title text-xl inline-block">{user.date}</Text>
            <Link href={"/"}>
              <MaterialIcons name="close" color={'#fff'} size={25}/> 
            </Link>
          </View>
        </View>
      </View>
      <View className="w-full bg-black p-3">
        <Text className="border-2 border-gray-500 p-4 rounded-3xl color-white font-text">
          Enviar mensagem
        </Text>
      </View>
    </SafeAreaView>
  );
}
