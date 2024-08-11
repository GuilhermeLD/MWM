import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"

const { Navigator, Screen } = createMaterialTopTabNavigator()

import Header from "@/components/Header";
import MainHistory from "@/components/MainHistory";
import Stories from "@/components/Stories";
import Past from "@/app/past";
import Tabs from "@/components/Tabs";
import InputText from "@/components/InputText";
import Story from "@/components/Story";
import { ScrollView } from "react-native-gesture-handler";
import Moments from "@/components/Moments";

function ConditionalWrapper() {`
    
  `}


export default function Home(){
  return (
<>
  <ScrollView  className="pb-60">
    <Header />
    {/* <Story />  */}

    
    <Stories />
    
    <Tabs />
    <InputText />
    <MainHistory /> 

  </ScrollView>
  {/* <Future /> 
  <Past />
  <Moments /> */}
  <View className="top-40">
    {/* <NavigationContainer independent={true} >
      <Navigator screenOptions={{
        tabBarActiveTintColor: "#536C51",
        tabBarInactiveTintColor: "#D9D9D9",
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: "bold",
        }
      }}>
        <Screen name="Futuro" component={Future} />
        <Screen name="Passado" component={Past}/>
      </Navigator>
    </NavigationContainer> */}
  </View>
  </>
)}