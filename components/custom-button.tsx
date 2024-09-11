import { Text, TouchableOpacity, ActivityIndicator } from 'react-native'
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
      disabled={isLoading} 
      className={`bg-secondary rounded-full py-3 ${otherStyles}`}
      activeOpacity={0.7}
      onPress={handlePress}  
    >
      {isLoading?<ActivityIndicator size={"large"} color="black"/>:
      <Text 
        className={`text-center text-xl`}
        style={{ fontFamily : "Suse-Bold" }}  
      >{title}</Text>}
    </TouchableOpacity>
  )
}

export default CustomButton