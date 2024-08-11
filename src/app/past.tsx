import Cards from "@/components/Cards";
import Header from "@/components/Header";
import InputText from "@/components/InputText";
import MainHistory from "@/components/MainHistory";
import Stories from "@/components/Stories";
import Tabs from "@/components/Tabs";
import { ScrollView } from "react-native-gesture-handler";

export default function Past(){
  return (
    <>
    <ScrollView>
      <Header />
      <Stories />
      <Tabs />
      <Cards />
    </ScrollView>
    </>
  )
}