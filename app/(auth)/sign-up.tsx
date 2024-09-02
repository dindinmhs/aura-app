import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Logo from '@/components/logo'
import FormField from '@/components/form-field'
import CustomButton from '@/components/custom-button'
import { Link } from 'expo-router'

const SignUp = () => {
    const [form, setForm] = useState({
        username : "",
        email : "",
        password : ""
    })

    const [isSubmitting, setSubmitting] = useState(false)

    const submit = () => {
        
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