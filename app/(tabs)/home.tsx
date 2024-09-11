import { View, Text, FlatList, RefreshControl, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialIcons } from '@expo/vector-icons'
import { red } from '@/constants/Colors'
import SearchInput from '@/components/search-input'
import HorizontalList from '@/components/horizontal-list'
import EmptyState from '@/components/empty-state'
import useAppWrite from '@/hooks/videos'
import { getAllPosts, getLatestPost } from '@/services/video'
import VideoCard from '@/components/video-card'
import { GlobalContextType, useGlobalContext } from '@/context/global-provider'

const Home = () => {
  const { user } = useGlobalContext() as GlobalContextType

  const { data : posts, refetch, isLoading } = useAppWrite(getAllPosts)
  const { data : latest } = useAppWrite(getLatestPost)
  
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = async () => {
    setRefreshing(true)
    await refetch()
    setRefreshing(false)
  }
  return (
    <SafeAreaView className='bg-primary h-full'>
      {isLoading?<ActivityIndicator className='m-auto' size={"large"} color={red}/>:
      <FlatList
        className='px-4'
        ListHeaderComponent={()=>(
          <View className='mt-4'>
            <View className='flex-row items-center justify-between'>
              <View className='max-w-[75%]'>
                <Text className='text-gray-300 text-lg' style={{ fontFamily : 'Suse-Bold' }}>Welcome Back</Text>
                <Text className='text-white text-2xl' style={{ fontFamily : 'Suse-Bold' }}>{user?.username}</Text>
              </View>
              <MaterialIcons name="local-fire-department" size={45} color={red}/>
            </View>
            <SearchInput placeholder='Search a video topic' otherStyles='my-4'/>
            <Text className='text-gray-200 text-lg' style={{ fontFamily : 'Suse-Bold' }}>Latest Video</Text>
            {latest && <HorizontalList data={latest}/>}
          </View>
        )}
        data={posts}
        renderItem={({ item }) => <VideoCard video={item}/>}
        ListEmptyComponent={()=>(
          <EmptyState message='Be the first one to upload a video' size={80}/>
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
      />}
    </SafeAreaView>
  )
}

export default Home