import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialIcons } from '@expo/vector-icons'
import { red } from '@/constants/Colors'
import SearchInput from '@/components/search-input'
import EmptyState from '@/components/empty-state'
import useAppWrite from '@/hooks/videos'
import { searchPost } from '@/services/video'
import VideoCard from '@/components/video-card'
import { useLocalSearchParams } from 'expo-router'

const Search = () => {
    const param : { query : string } = useLocalSearchParams() 

    const { data : posts, refetch } = useAppWrite(()=>searchPost(param.query))


    useEffect(()=>{
        refetch()
    },[param.query])

    return (
        <SafeAreaView className='bg-primary h-full'>
        <FlatList
            className='px-4'
            ListHeaderComponent={()=>(
            <View className='mt-4'>
                <View className='flex-row items-center justify-between'>
                <View className='max-w-[75%]'>
                    <Text className='text-gray-300 text-lg' style={{ fontFamily : 'Suse-Bold' }}>Search Result</Text>
                    <Text className='text-white text-2xl' style={{ fontFamily : 'Suse-Bold' }}>{param.query}</Text>
                </View>
                <MaterialIcons name="local-fire-department" size={45} color={red}/>
                </View>
                <SearchInput placeholder='Search a video topic' otherStyles='my-4'/>
            </View>
            )}
            data={posts}
            renderItem={({ item }) => <VideoCard video={item}/>}
            ListEmptyComponent={()=>(
            <EmptyState message='Be the first one to upload a video' size={80}/>
            )}
        />
        </SafeAreaView>
    )
}

export default Search