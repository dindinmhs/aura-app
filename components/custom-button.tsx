import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface CustomButonType {
  title : string;
  otherStyles? : string;
  handlePress : ()=>void;
  isLoading? : boolean;
}

const CustomButton = ({ title, otherStyles, handlePress, isLoading } : CustomButonType ) => {
  return (
    <TouchableOpacity 
      className={`bg-secondary rounded-full py-3 ${otherStyles}`}
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