import "@/styles/global.css"
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler"
import { Slot } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { 
  useFonts,
  CrimsonPro_300Light,
  CrimsonPro_400Regular,
  CrimsonPro_600SemiBold,
  CrimsonPro_700Bold } from "@expo-google-fonts/crimson-pro"
import * as SplashScreen from "expo-splash-screen"
import { useCallback } from "react"


SplashScreen.preventAutoHideAsync()

export default function Layout(){
  const [fontsLoaded, fontError] = useFonts ({
    CrimsonPro_300Light,
    CrimsonPro_400Regular,
    CrimsonPro_600SemiBold,
    CrimsonPro_700Bold
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  
  return (
    <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <ScrollView>
        <Slot />
        <StatusBar style="auto"/>
      </ScrollView>
    </GestureHandlerRootView>
  )
}