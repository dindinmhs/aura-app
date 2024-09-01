import CustomButton from "@/components/customButton";
import { red } from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { Text, ScrollView, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="bg-primary h-full px-4">
      <ScrollView contentContainerStyle={{ height : "100%" }}>
        <View className="flex-row items-center justify-center mt-4">
          <MaterialIcons name="local-fire-department" size={40} color={red}/>
          <Text className="text-gray-50 text-4xl" style={{ fontFamily : "Suse-Bold" }}>Aura</Text>
        </View>
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
        <CustomButton title="Continue" width="w-fit" handlePress={()=>router.push("/")}/>
      </ScrollView>
    </SafeAreaView>
  );
}
