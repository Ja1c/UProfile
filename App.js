import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/Login';
import SignupScreen from './screens/Signup';
import HomeScreen from './screens/UserProfile';
import UserProfile from './screens/UserProfile';
import PasswordRecoveryScreen from './screens/PasswordRecovery'; // Import the new screen

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Log In" component={LoginScreen} 
        options={{headerShown:false}}/>
        <Stack.Screen name="Sign Up" component={SignupScreen}
        options={{headerShown:false}}/>
        <Stack.Screen name="User Profile" component={UserProfile} 
        options={{headerShown:false}}/>
        <Stack.Screen name="Password Recovery" component={PasswordRecoveryScreen}
        options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
