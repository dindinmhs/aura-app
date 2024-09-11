import { View, Text, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '@/components/form-field'
import FileField from '@/components/file-field'
import { getDocumentAsync } from 'expo-document-picker'
import CustomButton from '@/components/custom-button'
import { FormUpload } from '@/types/video'
import { GlobalContextType, useGlobalContext } from '@/context/global-provider'
import { createVideo } from '@/services/video'



const Create = () => {
  const { user } = useGlobalContext() as GlobalContextType
  const [uploading, setUploading] = useState(false)

  const [form, setForm] = useState<FormUpload>({
    title : '',
    video : null,
    thumbnail : null,
    prompt : '',
    userId : undefined
  })

  const openPicker = async (selectType : string) => {
    const result = await getDocumentAsync({
      type : selectType === 'image'
        ? ['image/png', 'image/jpg']
        : ['video/mp4', 'video/gif']
    })
    if (!result.canceled) {
      if (selectType === 'image') {
        setForm({...form, thumbnail : result.assets[0]})
      }
      if (selectType === 'video') {
        setForm({...form, video : result.assets[0]})
      }
    }
  }

  const submit = async () => {
    if (!form.prompt || !form.thumbnail || !form.title || !form.video) {
        Alert.alert('Error', 'Please fill in all the fields')
    }

    setUploading(true)

    try {
        const result = await createVideo({...form, userId : user?.$id})
        setForm({
          title : '',
          video : null,
          thumbnail : null,
          prompt : '',
          userId : undefined
        })
        if (result) {
          Alert.alert('Succes', 'Video has been published')
        }
    } catch (error:any) {
        Alert.alert('Error', error.message)
    } finally {
        setUploading(false)
    }
}

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView className='px-4 mt-3'>
        <Text className='text-white text-2xl' style={{ fontFamily : 'Suse-Bold' }}>Upload Video</Text>
        <View className='mt-8'>
          <FormField
            title='Video Title'
            placeholder='Give your video a catch title...'
            handleChangeText={(e : string) => setForm({...form, title : e})}
            value={form.title}
          />
          <FileField 
            title='Upload Video'
            handleChangeFile={()=>openPicker('video')}
            type='video'
            asset={form.video}
          />
          <FileField 
            title='Thumbnail Image'
            type='image'
            handleChangeFile={()=>openPicker('image')}
            asset={form.thumbnail}
          />
          <FormField
            title='AI Prompt'
            placeholder='The promt to used to create this video'
            handleChangeText={(e : string) => setForm({...form, prompt : e})}
            value={form.prompt}
          />
          <CustomButton handlePress={submit} title='Publish' isLoading={uploading} otherStyles='my-4'/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Create