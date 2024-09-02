import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'

interface FormFieldTypes {
    title : string;
    value : string | undefined;
    handleChangeText : (e:string) => void;
    otherStyles? : string | undefined;
    props? : any;
    placeholder : string;
}

const FormField = ({title, value, placeholder, handleChangeText, otherStyles, ...props} : FormFieldTypes) => {

    return (
    <View className={`my-1 ${otherStyles}`}>
        <Text className='text-gray-300 text-lg' style={{ fontFamily : "Suse-Bold" }}>{title}</Text>
        <TextInput
            style={{ fontFamily : "Suse-Bold" }}
            className='bg-zinc-800 text-gray-300 px-4 py-3 rounded-md mt-1 text-lg border-2 border-zinc-800 focus:border-secondary'
            placeholder={placeholder} 
            value={value}
            placeholderTextColor="#3f3f46"
            onChangeText={handleChangeText}
            secureTextEntry={title === "Password"}
        />
    </View>
    )
}

export default FormField