import { Text, View } from "react-native"


export default function Tabs() {
  return (
      <View className="top-36 flex flex-row px-4 gap-4">
        <View className="border-b-2 pb-px border-primary">
          <Text className="font-title color-primary text-2xl">futuro</Text>
        </View>
          <Text className="font-light color-unselected text-2xl">passado</Text>
        </View>
  )
}


