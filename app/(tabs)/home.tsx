import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialIcons } from '@expo/vector-icons'
import { red } from '@/constants/Colors'
import SearchInput from '@/components/search-input'

const Home = () => {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <FlatList
        ListHeaderComponent={()=>(
          <View className='mt-4 mx-4 '>
            <View className='flex-row items-center justify-between'>
              <View className=''>
                <Text className='text-gray-300 text-lg' style={{ fontFamily : 'Suse-Bold' }}>Welcome Back</Text>
                <Text className='text-white text-2xl' style={{ fontFamily : 'Suse-Bold' }}>Dindin Imanudin</Text>
              </View>
              <MaterialIcons name="local-fire-department" size={45} color={red}/>
            </View>
            <SearchInput placeholder='Search a video topic' otherStyles='my-4'/>
          </View>
        )}
        data={[{id : 1}, {id : 2}]}
        renderItem={({ item }) => <Text className='text-white'>{item.id}</Text>}
      />
    </SafeAreaView>
  )
}

export default Home