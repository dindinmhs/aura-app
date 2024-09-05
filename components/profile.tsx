import { View, Text, Image } from 'react-native'
import React from 'react'

interface ProfileType {
    src : string;
    style? : string
}

const Profile = ({ src, style } : ProfileType) => {
  return (
    <Image
        style={{ borderWidth : 3, borderColor : "red" }}
        className={`${style} aspect-square rounded-full`}
        source={{uri : src}}
    />
  )
}

export default Profile