import { Link } from "expo-router";
import { Image, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import usersStories from "@/StoriesImg";

export default function Stories() {
  return (
    <>
      <View className="top-28 w-full h-auto px-4 flex flex-row">
        <Text className="flex-1 font-text text-xl">fotos favoritas</Text>
        <Text className="font-text text-lg">view all</Text>
      </View>
      <ScrollView horizontal className="top-32 px-4 w-full flex-row gap-3 p-1">
        {usersStories.map((story) => (
          <View className="px-1" key={story.userId}>
            <Link href={"/stories"}>
              <Image
                source={{uri: story.stories[0].uri}}
                className="size-20 rounded-full"
              />
            </Link>
            <Text className="text-center text-lg font-light pt-1">{story.date}</Text>
          </View>
        ))}
        
      </ScrollView>
    </>
  );
}
