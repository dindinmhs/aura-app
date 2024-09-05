import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { VideoType } from '@/types/video'

interface HorizontalListType {
    data : VideoType[];
}

const HorizontalList = ({ data} : HorizontalListType) => {
  return (
    <FlatList
        data={data}
        renderItem={({item})=> (<Text className='text-white'>{item.id}</Text>)}
        horizontal
    />
  )
}

export default HorizontalList