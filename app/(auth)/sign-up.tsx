import { View, Text, SafeAreaView, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import Logo from '@/components/logo'
import FormField from '@/components/form-field'
import CustomButton from '@/components/custom-button'
import { Link, router } from 'expo-router'
import { createUser } from '@/services/users'
import { GlobalContextType, useGlobalContext } from '@/context/global-provider'

const SignUp = () => {
    const { setLoggedIn, setUser } = useGlobalContext() as GlobalContextType

    const [form, setForm] = useState({
        username : "",
        email : "",
        password : ""
    })

    const [isSubmitting, setSubmitting] = useState(false)

    const submit = async () => {
        if (!form.email || !form.password || !form.username) {
            Alert.alert('Error', 'Please fill in all the fields')
        }

        setSubmitting(true)

        try {
            const result = await createUser(form.username, form.email, form.password)
            setUser(result)
            setLoggedIn(true)
            router.replace('/home')
        } catch (error:any) {
            Alert.alert('Error', error.message)
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView>
                <View className='min-h-[90vh] px-4 my-6 justify-center'>
                    <Logo/>
                    <Text 
                        className='text-white text-center text-3xl mt-4 mb-6' 
                        style={{ fontFamily : "Suse-Bold" }}
                    >Log in to <Text className='text-secondary'>Aura</Text></Text>
                    <FormField 
                        title="Username"
                        value={form.username}
                        placeholder='Enter Your Username'
                        handleChangeText={(e : string) => setForm({...form, username : e})} 
                    />
                    <FormField 
                        title="Email"
                        value={form.email}
                        placeholder='Enter Your Email'
                        handleChangeText={(e : string) => setForm({...form, email : e})} 
                    />
                    <FormField 
                        title="Password"
                        value={form.password}
                        placeholder='Enter Your Password'
                        handleChangeText={(e : string) => setForm({...form, password : e})}  
                    />
                    <CustomButton
                        title='Sign In'
                        handlePress={submit}
                        isLoading={isSubmitting}
                        otherStyles='my-6'
                    />
                    <Text className='text-white text-center' style={{ fontFamily : "Suse" }}>have an account already? <Link className='text-secondary' style={{ fontFamily : "Suse-Bold" }} href="/sign-in">Sign In</Link></Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
    }

export default SignUp