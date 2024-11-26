import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import DarkModeToggle from '../components/DarkModeToggle';
import InputFields from '../components/InputFields';
import SocialLoginButtons from '../components/SocialLoginButtons';
import { useRouter } from 'expo-router';

const LoginScreen = ({ navigation }) => {

    const router = useRouter();
    const [isDarkMode, setIsDarkMode] = React.useState(false);

    const toggleDarkMode = () => {
    setIsDarkMode(previousState => !previousState);
  };

  return (
    <View style={[styles.container, isDarkMode ? styles.darkContainer : styles.lightContainer]}>
      <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={[styles.title, isDarkMode ? styles.glowText : {}]}>Log In</Text>
      
      <InputFields />

      <Text style={styles.linkText} onPress={() => router.push('PasswordRecovery')}>
        Forgot Password?
      </Text>

      <TouchableOpacity  
        style={[styles.loginButton]}
        onPress={() => router.replace('Dashboard')} // Navigate to HomeScreen
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or log in with</Text>
      
      <SocialLoginButtons />

      <Text style={styles.linkText} onPress={() => router.push('Signup')}>
        Don't have an account? Sign Up
      </Text>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 20,
      backgroundColor: '#f2f2f2', // Default light mode background
    },
    darkContainer: {
      backgroundColor: '#1a1a1a',
    },
    lightContainer: {
      backgroundColor: '#f2f2f2',
    },
    logo: {
      width: 150,
      height: 150,
      alignSelf: 'center',
      marginBottom: 30,
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
      textAlign: 'center',
      color: '#000', // Default color for light mode
    },
    glowText: {
      color: '#fff', // White font color for dark mode
      textShadowColor: '#44ffb1', // Glow color
      textShadowOffset: { width: 0, height: 0 },
      textShadowRadius: 10, // Glow effect intensity
    },
    inputContainer: {
      marginBottom: 15,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      paddingHorizontal: 15,
      height: 50,
      marginBottom: 15,
      backgroundColor: '#fff',
    },
    linkText: {
      color: '#007BFF',
      textAlign: 'center',
      marginTop: -15,
    },
    orText: {
      textAlign: 'center',
      color: '#888',
      marginVertical: 10,
    },
    socialContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: 10,
    },
    iconButton: {
      marginHorizontal: 10,
      marginBottom: 15,
    },
    darkModeContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginTop: 20,
      position: 'absolute',
      right: 20,
      top: 20,
      zIndex: 1,
    },
    darkModeText: {
      fontSize: 16,
      marginRight: 10,
    },
    switch: {
      marginLeft: 'auto',
    },
    darkText: {
      color: '#fff',
    },
    lightText: {
      color: '#000',
    },
    loginButton: {
      backgroundColor: '#44ffb1',
      paddingVertical: 15,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 15,
      marginBottom: 15,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
    },
});

export default LoginScreen;
