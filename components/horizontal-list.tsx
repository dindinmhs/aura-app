import { View, Text, FlatList, ViewToken } from 'react-native'
import React, { useEffect, useState } from 'react'
import { VideoDocument} from '@/types/video'
import Thumbnail from './thumbnail';
import * as Animatable from "react-native-animatable"

interface HorizontalListType {
    data : VideoDocument[];
}

const zoomIn = {
  0: { transform: [{ scale: 0.9 }] },
  1: { transform: [{ scale: 1 }] },
};

const zoomOut = {
  0: { transform: [{ scale: 1 }] },
  1: { transform: [{ scale: 0.9 }] },
};

const HorizontalList = ({ data } : HorizontalListType) => {
  const [active, setActive] = useState<number|null>(0)

  return (
    <FlatList
        data={data}
        renderItem={({item, index})=> (
          <Animatable.View
            animation={active === index ? zoomIn : zoomOut}
            duration={500}
          >
            <Thumbnail
              containerStyles='w-[180px] h-72 bg-white my-6 mr-6'
              thumbnail={item.thumbnail}
              iconSize={40}
              video={item.video}
            />
          </Animatable.View>
        )}
        onViewableItemsChanged={(info)=>{
          if (info.viewableItems.length > 0) {
            setActive(info.viewableItems[0].index)
          }
        }}
        viewabilityConfig={{ itemVisiblePercentThreshold : 70 }}
        horizontal
    />
  )
}

export default HorizontalList