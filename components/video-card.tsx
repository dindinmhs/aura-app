import { View, Text, Image } from 'react-native'
import React from 'react'
import { VideoDocument } from '@/types/video'
import Profile from './profile'
import MoreButton from './more-button'

const VideoCard = ({video : { video, title, prompt, thumbnail, creator : {avatar, username} }} : {video : VideoDocument}) => {
    return (
        <View className='mb-6'>
            <View>
                <View className='flex-row items-center justify-between'>
                    <View className='flex-row items-center'>
                        <Profile style='w-12' src={avatar}/>
                        <View className='ml-2 max-w-[74%]'>
                            <Text numberOfLines={1} ellipsizeMode='tail' className='text-white' style={{ fontFamily : "Suse-Bold" }}>{title}</Text>
                            <Text numberOfLines={1} ellipsizeMode='tail' className='text-gray-200 text-sm' style={{ fontFamily : "Suse-Bold" }}>{username}</Text>
                        </View>
                    </View>
                    <MoreButton/>
                </View>
                <Image
                    className='w-full h-[180px] mt-3 rounded-lg'
                    resizeMode='cover'
                    source={{ uri : thumbnail}}
                />
            </View>
        </View>
    )
}

export default VideoCard