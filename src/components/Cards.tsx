import { Pressable, Text, } from "react-native";
import { Button } from "./Button";

export default function Cards() {
  return (
    <Pressable className="bg-primary h-44 top-44 mx-4 rounded-[20px]">
      <Text className="font-bold text-white pl-4 pt-4 text-2xl">outback dos crias</Text>
      <Text className="font-light text-white pl-4 -pt-1 text-base">13 de abril de 2023</Text>
      <Button label="lembre dessa historia" variant="secondary" className="w-52 ml-4 rounded-[10px] fixed top-12" />
    </Pressable>
  )
}