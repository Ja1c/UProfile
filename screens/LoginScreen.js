import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, Switch, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(previousState => !previousState);
  };

  return (
    <View style={[styles.container, isDarkMode ? styles.darkContainer : styles.lightContainer]}>
      {/* Dark Mode Toggle */}
      <View style={styles.darkModeContainer}>
        <Text style={[styles.darkModeText, isDarkMode ? styles.darkText : styles.lightText]}>
          Dark Mode
        </Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          style={styles.switch}
        />
      </View>

      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={[styles.title, isDarkMode ? styles.glowText : {}]}>Log In</Text>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Password" secureTextEntry style={styles.input} />
      </View>
      <TouchableOpacity  
        style={[styles.loginButton]}
        onPress={() => navigation.navigate('User Profile')} // Navigate to HomeScreen
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      
      <Text style={styles.linkText} onPress={() => navigation.navigate('Sign Up')}>
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
      marginTop: 15,
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
      marginBottom: 15,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
    },
});

export default LoginScreen;
