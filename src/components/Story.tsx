import { useState } from "react";
import { Image, View } from "react-native";
import usersStories from '@/StoriesImg';


export default function Story() {
  const [userIndex, setUserIndex] = useState(0);
  const [storyIndex, setStoryIndex] = useState(0);

  const user = usersStories[userIndex];
  const story = user.stories[storyIndex];


  // Formato que esta no video, mas esta conflitando no meu codigo - ESTUDDAR ISSO1!! 
  // const story = user[userIndex];

  return (
    <View>
      <Image source={{ uri: usersStories[1].stories[1].uri }} className="w-full h-full" />
    </View>
  );
}
