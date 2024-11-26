import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context'


const RootLayout = () => {

  return (
    <SafeAreaProvider>
      <Stack
      screenOptions={{
        headerShown: false
      }}>
              <Stack.Screen name ='index'/>
              <Stack.Screen name = 'Signup'/>
              <Stack.Screen name = 'PasswordRecovery'/>
              <Stack.Screen name = 'DashboardLayout'/>
      </Stack>

    </SafeAreaProvider>
    
  )
}

export default RootLayout