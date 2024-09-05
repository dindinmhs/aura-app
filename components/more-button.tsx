import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

interface MoreButtonType {
  size? : number;
  color? : string;
}

const MoreButton = ({ size = 27, color = 'white' } : MoreButtonType) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
    >
        <MaterialIcons name='more-vert' size={size} color={color}/>
    </TouchableOpacity>
  )
}

export default MoreButton