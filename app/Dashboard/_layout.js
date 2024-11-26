import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import React from 'react';
import { StyleSheet, View, Switch, Text, Dimensions } from 'react-native';

export default function DrawerLayout() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [stars, setStars] = React.useState([]);

  const toggleDarkMode = () => {
    setIsDarkMode(previousState => {
      const newIsDarkMode = !previousState;
      if (newIsDarkMode) {
        const { width, height } = Dimensions.get('window');
        const newStars = Array.from({ length: 100 }, () => ({
          top: Math.random() * (height - 10),
          left: Math.random() * (width - 10),
        }));
        setStars(newStars);
      } else {
        setStars([]);
      }
      return newIsDarkMode;
    });
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="(tabs)" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Home',
            title: 'Home',
          }}
        />
        <View style={[styles.container, isDarkMode ? styles.darkContainer : styles.lightContainer]}>
          {isDarkMode && (
            <View style={styles.starsContainer}>
              {stars.map((star, index) => (
                <View key={index} style={[styles.star, { top: star.top, left: star.left }]}>
                  <Text style={styles.starText}>⭐</Text>
                </View>
              ))}
            </View>
          )}

          <Text style={[styles.text, isDarkMode ? styles.darkText : styles.lightText]}>
            Dark Mode Example
          </Text>

          <Switch
            value={isDarkMode}
            onValueChange={toggleDarkMode}
            style={styles.switch}
          />
        </View>
      </Drawer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lightContainer: {
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#1a1a1a',
  },
  starsContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    pointerEvents: 'none',
    zIndex: -1,
  },
  star: {
    position: 'absolute',
    width: 10,
    height: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  starText: {
    fontSize: 6,
    color: '#FFD700',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  lightText: {
    color: '#000',
  },
  darkText: {
    color: '#fff',
  },
  switch: {
    marginTop: 20,
  },
});
