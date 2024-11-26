import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

const Home = () => {
  return (
    <ImageBackground 
      source={require('../../../assets/dino.jpg')}  // Replace with your background image path
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          {/* Greeting Text */}
          <Text style={styles.greeting}>Hi, this is the Home Screen 👋</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',  // Overlay over the image
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Black overlay with 50% opacity for the fade effect
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',  // White text color for better contrast
    marginBottom: 20,
  },
});

export default Home;


