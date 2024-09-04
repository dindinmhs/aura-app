import { View, Text, SafeAreaView, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import Logo from '@/components/logo'
import FormField from '@/components/form-field'
import CustomButton from '@/components/custom-button'
import { Link, router } from 'expo-router'
import { signIn } from '@/services/users'

const SignIn = () => {
    const [form, setForm] = useState({
        email : "",
        password : ""
    })

    const [isSubmitting, setSubmitting] = useState(false)

    const submit = async () => {
        if (!form.email || !form.password) {
            Alert.alert('Error', 'Please fill in all the fields')
        }

        setSubmitting(true)

        try {
            await signIn(form.email, form.password)

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
                    <Text className='text-white text-center' style={{ fontFamily : "Suse" }}>Don&apos;t have account? <Link className='text-secondary' style={{ fontFamily : "Suse-Bold" }} href="/sign-up">Sign Up</Link></Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
    }

export default SignIn