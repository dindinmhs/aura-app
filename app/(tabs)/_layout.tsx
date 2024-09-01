import { View, Text } from 'react-native'
import React, { ComponentProps } from 'react'
import { Tabs } from 'expo-router'
import { MaterialIcons } from '@expo/vector-icons'
import Entypo from '@expo/vector-icons/Entypo';
import { IconProps } from '@expo/vector-icons/build/createIconSet';
import { dark, red } from '@/constants/Colors';

const TabIcon = ({...rest}:IconProps<ComponentProps<typeof MaterialIcons>['name']>) => {
    return <MaterialIcons size={27} {...rest}/>
}

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{
        tabBarActiveTintColor : red,
        headerShown : false,
        tabBarLabelStyle : {
            fontWeight : "bold",
            paddingBottom : 4,
        },
        tabBarStyle : {
            backgroundColor : dark,
            borderTopWidth : 4,
            borderTopColor : "#232533",
            paddingTop : 4,
            height : 55
        }
    }}>
        <Tabs.Screen
            name='home'
            options={{
                title : "Home",
                headerShown : false,
                tabBarIcon : ({color, focused}) => (
                    <TabIcon color={color} name='home'/>
                ),
            }}
        />
        <Tabs.Screen
            name='create'
            options={{
                title : "Create",
                headerShown : false,
                tabBarIcon : ({color, focused})=>(
                    <TabIcon color={color} name='add-circle'/>
                )
            }}
        />
        <Tabs.Screen
            name='profile'
            options={{
                title : "Profile",
                headerShown : false,
                tabBarIcon : ({color, focused})=>(
                    <TabIcon color={color} name='person'/>
                )
            }}
        />
        <Tabs.Screen
            name='bookmark'
            options={{
                title : "Bookmark",
                headerShown : false,
                tabBarIcon : ({color, focused})=>(
                    <TabIcon color={color} name='bookmarks'/>
                )
            }}
        />
    </Tabs>
  )
}

export default TabsLayout