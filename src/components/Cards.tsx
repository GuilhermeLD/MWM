import { Text, View, TouchableOpacity, ImageBackground, StyleSheet } from "react-native";
import { Link } from "expo-router";
import textMoments from "@/TextMoments";
import { LinearGradient } from 'expo-linear-gradient';

export default function Cards() {
  return (
    <View className="top-44 mx-4 pb-60">
      {textMoments.map((moment) => (
        <View
          key={moment.slug}
          className="bg-primary h-44 rounded-[20px] overflow-hidden mb-4"
        >
          <ImageBackground
            source={{uri: moment.img}}
            resizeMode="cover"
            style={styles.image}
          >
          <LinearGradient
            colors={['rgba(0,0,0,0.7)', 'transparent']}
            style={StyleSheet.absoluteFillObject}
          />
            <View>
              <Text className="font-bold text-white pl-4 pt-4 text-2xl">
                {moment.title}
              </Text>
              <Text className="font-light text-white pl-4 -pt-1 text-base">
                {moment.date}
              </Text>
            </View>
            <Link href={`/moments/${moment.slug}`} asChild className="mb-5">
              <TouchableOpacity className="bg-primary h-10 px-4 w-52 ml-4 rounded-[10px] flex items-center justify-center">
                <Text className="text-white text-base">
                  lembre dessa historia
                </Text>
              </TouchableOpacity>
            </Link>
          </ImageBackground>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'column'
  },

});
  