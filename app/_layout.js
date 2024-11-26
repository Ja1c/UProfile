import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const RootLayout = () => {
  return (
    <Stack>
        <Stack.Screen name='index'/>
        <Stack.Screen name = 'Signup'/>
    </Stack>
  )
}

export default RootLayout