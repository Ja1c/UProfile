import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, Switch, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Import MaterialIcons

const SignupScreen = ({ navigation }) => {
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
      <Text style={[styles.title, isDarkMode ? styles.glowText : {}]}>Sign Up</Text>
      
      {/* Input Fields */}
      <TextInput placeholder="Name" style={styles.input} />
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />
      
      {/* Sign Up Button */}
      <TouchableOpacity 
        style={styles.signupButton}
        onPress={() => navigation.navigate('User Profile')}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Social Login Buttons (Icon-Only) */}
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <MaterialIcons name="email" size={30} color="#DB4437" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <MaterialIcons name="facebook" size={30} color="#4267B2" />
        </TouchableOpacity>
      </View>

      <Text style={styles.linkText} onPress={() => navigation.goBack()}>
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
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  iconButton: {
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
  },
});

export default SignupScreen;
