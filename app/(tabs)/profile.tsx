import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialIcons } from '@expo/vector-icons'
import { red } from '@/constants/Colors'
import EmptyState from '@/components/empty-state'
import useAppWrite from '@/hooks/videos'
import { getUserPosts } from '@/services/video'
import VideoCard from '@/components/video-card'
import { GlobalContextType, useGlobalContext } from '@/context/global-provider'
import Profile from '@/components/profile'
import { signOut } from '@/services/users'
import { router } from 'expo-router'

const ProfilePage = () => {
  const { user, setLoggedIn, setUser } = useGlobalContext() as GlobalContextType

  const { data : posts, isLoading } = useAppWrite(()=>getUserPosts(user?.$id))

  const logOut = async () => {
    await signOut()
    setUser(null)
    setLoggedIn(false)
    router.replace('/sign-in')
  }
  return (
    <SafeAreaView className='bg-primary h-full'>
      {isLoading?<ActivityIndicator className='m-auto' size={"large"} color={red}/>:
        <FlatList
        className='px-4'
        ListHeaderComponent={()=>(
          <View className='mt-6 mb-7'>
            <TouchableOpacity onPress={logOut} className='w-8 self-end' activeOpacity={0.5}>
              <MaterialIcons name='logout' size={30} color={red}/>
            </TouchableOpacity>
            <View className='items-center'>
              {user && <Profile src={user.avatar} style='w-16'/>}
              <Text className='text-white my-3 text-2xl text-center' style={{ fontFamily : 'Suse-Bold' }}>{user?.username}</Text>
              <Text className='text-white text-xl text-center' style={{ fontFamily : 'Suse-Bold' }}>{posts?.length}</Text>
              <Text className='text-gray-300 text-center' style={{ fontFamily : 'Suse-Bold' }}>Posts</Text>
            </View>
          </View>
        )}
        data={posts}
        renderItem={({ item }) => <VideoCard video={item}/>}
        ListEmptyComponent={()=>(
          <EmptyState message='Be the first one to upload a video' size={80}/>
        )}
      />}
    </SafeAreaView>
  )
}

export default ProfilePage