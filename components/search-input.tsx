import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

interface SearchIputType {
    placeholder : string;
    otherStyles? : string;
}

const SearchInput = ({placeholder, otherStyles} : SearchIputType) => {
  return (
    <View className={`bg-zinc-800 border-2 border-zinc-800 focus:border-secondary px-4 py-3 flex-row justify-between rounded-md ${otherStyles}`}>
        <TextInput
            style={{ fontFamily : "Suse-Bold" }}
            className='text-gray-300 text-lg flex-1'
            placeholder={placeholder} 
            // value={value}
            placeholderTextColor="#3f3f46"
            // onChangeText={handleChangeText}
        />
        <MaterialIcons name='search' size={30} color={"white"}/>
    </View>
  )
}

export default SearchInput