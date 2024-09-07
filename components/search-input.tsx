import { View, Text, TextInput, Alert, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { router, usePathname } from 'expo-router';

interface SearchIputType {
    placeholder : string;
    otherStyles? : string;
}

const SearchInput = ({placeholder, otherStyles} : SearchIputType) => {
  const [query, setQuery] = useState('')
  const pathname = usePathname()
  return (
    <View className={`bg-zinc-800 border-2 border-zinc-800 focus:border-secondary px-4 py-3 flex-row justify-between rounded-md ${otherStyles}`}>
        <TextInput
            style={{ fontFamily : "Suse-Bold" }}
            className='text-gray-300 text-lg flex-1'
            placeholder={placeholder} 
            value={query}
            placeholderTextColor="#cdcde0"
            onChangeText={e => setQuery(e)}
        />
        <TouchableOpacity
          onPress={()=>{
            if (!query) {
              Alert.alert('Error', 'Please input something to search result across database')
              return
            }
            if (pathname.startsWith("/search")) {
              router.setParams({ query })
              return
            }
              router.push(`/search/${query}`)
          }}
          activeOpacity={0.7}
        >
          <MaterialIcons name='search' size={30} color={"white"}/>
        </TouchableOpacity>
    </View>
  )
}

export default SearchInput