import { View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { red } from '@/constants/Colors'
import { MaterialIcons } from '@expo/vector-icons';
import { AVPlaybackStatusSuccess, ResizeMode, Video } from 'expo-av'

interface ThumbnailType {
    thumbnail : string;
    containerStyles : string;
    iconSize : number;
    video : string;
}

const Thumbnail = ({ thumbnail, containerStyles, iconSize, video } : ThumbnailType) => {
    const [isPlaying, setPlaying] = useState(false)

    if (isPlaying) {
        return (
            <Video
                className={`rounded-lg ${containerStyles}`}
                source={{ uri : video }}
                shouldPlay
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                onPlaybackStatusUpdate={(status)=>{
                    if (status.isLoaded) {
                        if (status.didJustFinish) {
                            setPlaying(false)
                        }
                    }
                }}
            />
        )
    }

    return (
        <TouchableOpacity onPress={()=>setPlaying(true)} activeOpacity={0.8} className={`rounded-lg overflow-hidden ${containerStyles}`}>
            <Image
                className='w-full h-full'
                resizeMode='cover'
                source={{ uri : thumbnail}}
            />
            <View className='absolute w-full h-full justify-center items-center'>
                <View className='p-2 rounded-full bg-primary'>
                    <MaterialIcons name='play-arrow' size={iconSize} color={red}/>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Thumbnail