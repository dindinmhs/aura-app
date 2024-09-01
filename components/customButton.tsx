import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface CustomButonType {
  title : string,
  width : string,
  handlePress : ()=>void
}

const CustomButton = ({ title, width, handlePress } : CustomButonType ) => {
  return (
    <TouchableOpacity 
      className={`bg-secondary rounded-full py-3 ${width}`}
      activeOpacity={0.7}
      onPress={handlePress}  
    >
      <Text 
        className={`text-center text-xl`}
        style={{ fontFamily : "Suse-Bold" }}  
      >{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton