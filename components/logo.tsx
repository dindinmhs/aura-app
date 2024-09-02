import { View, Text } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { red } from '@/constants/Colors'

const Logo = () => {
  return (
    <View className="flex-row items-center justify-center mt-4">
        <MaterialIcons name="local-fire-department" size={40} color={red}/>
        <Text className="text-gray-50 text-4xl" style={{ fontFamily : "Suse-Bold" }}>Aura</Text>
    </View>
  )
}

export default Logo