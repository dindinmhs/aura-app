import { View, Text } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { red } from '@/constants/Colors';
import CustomButton from './custom-button';
import { router } from 'expo-router';

interface EmptyStateType {
    size : number;
    message : string;
}

const EmptyState = ({ size, message } : EmptyStateType) => {
  return (
    <View className='items-center justify-center px-4'>
        <MaterialIcons name='search-off' size={size} color={red}/>
        <Text className='text-white text-xl' style={{ fontFamily : 'Suse-Bold' }}>No Videos Found</Text>
        <Text className='text-gray-200' style={{ fontFamily : 'Suse-Bold' }}>{message}</Text>
        <CustomButton title='Create Video' otherStyles='w-full mt-4' handlePress={()=>router.push('/create')}/>
    </View>
  )
}

export default EmptyState