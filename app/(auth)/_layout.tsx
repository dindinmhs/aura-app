import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import StatusBarLigth from '@/components/status-bar'

const AuthLayout = () => {
  return (
    <>
        <Stack>
            <Stack.Screen
                name='sign-in'
                options={{
                    headerShown : false
                }}
            />
            <Stack.Screen
                name='sign-up'
                options={{
                    headerShown : false
                }}
            />
        </Stack>
        <StatusBarLigth/>
    </>
  )
}

export default AuthLayout