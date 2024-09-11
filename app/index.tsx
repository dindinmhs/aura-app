import CustomButton from "@/components/custom-button";
import Logo from "@/components/logo";
import OpenScreen from "@/components/open-screen";
import StatusBarLigth from "@/components/status-bar";
import { GlobalContextType, useGlobalContext } from "@/context/global-provider";
import { Redirect, router } from "expo-router";
import { Text, ScrollView, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const {isLoading, isLoggedIn} = useGlobalContext() as GlobalContextType

  if (isLoading) return <OpenScreen/>

  if (!isLoading && isLoggedIn) return <Redirect href="/home"/>

  return (
    <SafeAreaView className="bg-primary h-full px-4">
      <ScrollView contentContainerStyle={{ height : "100%" }}>
        <View className="h-full justify-center">
          <Logo/>
          <View className="flex-row gap-2 mt-6 justify-center">
            <Image
              source={require("@/assets/images/person.jpg")}
              className="w-[120px] h-[200px] -rotate-12 translate-x-3"
              style={{ borderRadius : 10, borderColor : "white", borderWidth : 2 }}
            />
            <Image
              source={require("@/assets/images/building.jpg")}
              className="w-[120px] h-[200px] rotate-6"
              style={{ borderRadius : 10, borderColor : "white", borderWidth : 2 }}
            />
          </View>
          <Text className="text-white text-3xl text-center mt-8" style={{ fontFamily : "Suse-Bold" }}>
            Discover Endless Possibilities with{' '}
            <Text className="text-3xl text-secondary" style={{ fontFamily : "Suse-Bold" }}>
              Aura
            </Text>
          </Text>
          <Text className="my-8 text-white text-center text-sm" style={{ fontFamily : "Suse" }}>
            Where creativity meets innovation : embark on a journey of limitless exploration with Aura
          </Text>
          <CustomButton title="Continue" handlePress={()=>router.push("/sign-in")}/>
        </View>
      </ScrollView>
      <StatusBarLigth/>
    </SafeAreaView>
  );
}
