import GlobalProvider from "@/context/global-provider";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {

  const [fontsLoad, error] = useFonts({
    "Suse":require("../assets/fonts/SUSE-Regular.ttf"),
    "Suse-Medium":require("../assets/fonts/SUSE-Medium.ttf"),
    "Suse-Bold":require("../assets/fonts/SUSE-Bold.ttf"),
  })

  useEffect(()=>{
    if (error) throw error
    if (fontsLoad) SplashScreen.hideAsync()
  },[fontsLoad, error])

  if (!fontsLoad && !error) return null

  return (
    <GlobalProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown : false }}/>
        <Stack.Screen name='(auth)' options={{headerShown : false}}/>
        <Stack.Screen name='(tabs)' options={{headerShown : false}}/>
      </Stack>
    </GlobalProvider>
  );
}
