import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { red } from '@/constants/Colors';
import { ResizeMode, Video } from 'expo-av';
import { DocumentPickerAsset } from 'expo-document-picker';

interface FormFieldTypes {
    title : string;
    handleChangeFile : () => void;
    asset : DocumentPickerAsset | null;
    type : 'image'|'video';
}

const FileField = ({title, handleChangeFile, asset, type} : FormFieldTypes) => {

    return (
    <View className={`my-1`}>
        <Text className='text-gray-300 text-lg' style={{ fontFamily : "Suse-Bold" }}>{title}</Text>
        {
            asset ? type === 'video' ? <Video
                className='w-full h-[185px] rounded-lg my-2 bg-zinc-800'
                source={{ uri : asset.uri }}
                isLooping
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
            /> : <Image
                className='w-full h-[185px] rounded-lg my-2'
                resizeMode='cover'
                source={{ uri : asset.uri }}
            /> : null
        }
        <TouchableOpacity onPress={handleChangeFile} className='bg-zinc-800 flex-row gap-x-1 justify-center items-center py-3 rounded-lg w-full mx-auto mt-1' activeOpacity={0.5}>
            <MaterialIcons name='upload-file' className='bg-white' size={28} color={red}/>
            <Text className='text-gray-400' style={{ fontFamily : 'Suse-Bold' }}>Choose a file</Text>
        </TouchableOpacity>
    </View>
    )
}

export default FileField