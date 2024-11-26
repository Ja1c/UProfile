import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'; 
import NameInput from '../components/NameInput'; 
import EmailInput from '../components/EmailInput'; 
import PasswordInput from '../components/PasswordInput'; 
import DarkModeToggle from '../components/DarkModeToggle'; 
import SocialLoginButtons from '../components/SocialLoginButtons';
import { useRouter } from 'expo-router';

const SignupScreen = ({ navigation }) => {

    const router = useRouter();

  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(previousState => !previousState);
  };

  return (
    <View style={[styles.container, isDarkMode ? styles.darkContainer : styles.lightContainer]}>
      {/* Dark Mode Toggle */}
      <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={[styles.title, isDarkMode ? styles.glowText : {}]}>Sign Up</Text>
      
      {/* Input Fields */}
      <NameInput />
      <EmailInput />
      <PasswordInput />
      
      {/* Sign Up Button */}
      <TouchableOpacity 
        style={styles.signupButton}
        onPress={() => navigation.navigate('User Profile')}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Social Login Buttons */}
      <SocialLoginButtons />

      <Text style={styles.linkText} onPress={() => router.back()}>
        Already have an account? Log In
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  darkContainer: {
    backgroundColor: '#1a1a1a',
  },
  lightContainer: {
    backgroundColor: '#fff',
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
    color: '#000',
  },
  glowText: {
    color: '#fff',
    textShadowColor: '#44ffb1',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  linkText: {
    color: '#007BFF',
    textAlign: 'center',
    marginTop: 15,
  },
  signupButton: {
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

export default SignupScreen;
