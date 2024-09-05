import { View, Text, FlatList, RefreshControl } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialIcons } from '@expo/vector-icons'
import { red } from '@/constants/Colors'
import SearchInput from '@/components/search-input'
import HorizontalList from '@/components/horizontal-list'
import EmptyState from '@/components/empty-state'
import useAppWrite from '@/hooks/videos'
import { getAllPosts } from '@/services/video'
import VideoCard from '@/components/video-card'

const Home = () => {
  const { data, refetch } = useAppWrite(getAllPosts)

  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = async () => {
    setRefreshing(true)
    await refetch()
    setRefreshing(false)
  }
  return (
    <SafeAreaView className='bg-primary h-full'>
      <FlatList
        className='px-4'
        ListHeaderComponent={()=>(
          <View className='mt-4'>
            <View className='flex-row items-center justify-between'>
              <View>
                <Text className='text-gray-300 text-lg' style={{ fontFamily : 'Suse-Bold' }}>Welcome Back</Text>
                <Text className='text-white text-2xl' style={{ fontFamily : 'Suse-Bold' }}>Dindin Imanudin</Text>
              </View>
              <MaterialIcons name="local-fire-department" size={45} color={red}/>
            </View>
            <SearchInput placeholder='Search a video topic' otherStyles='my-4'/>
            <Text className='text-gray-200 text-lg' style={{ fontFamily : 'Suse-Bold' }}>Latest Video</Text>
            <HorizontalList data={[{id : 1}, {id:2}]}/>
          </View>
        )}
        data={data}
        renderItem={({ item }) => <VideoCard video={item}/>}
        ListEmptyComponent={()=>(
          <EmptyState message='Be the first one to upload a video' size={80}/>
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
      />
    </SafeAreaView>
  )
}

export default Home