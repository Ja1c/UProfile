// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/UserProfile';
import UserProfile from './screens/UserProfile';
import PasswordRecoveryScreen from './screens/PasswordRecoveryScreen'; // Import the new screen

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Log In" component={LoginScreen} />
        <Stack.Screen name="Sign Up" component={SignupScreen} />
        <Stack.Screen name="User Profile" component={UserProfile} />
        <Stack.Screen name="Password Recovery" component={PasswordRecoveryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
