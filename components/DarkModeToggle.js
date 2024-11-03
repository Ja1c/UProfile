import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
  return (
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
  );
};

const styles = StyleSheet.create({
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
});

export default DarkModeToggle;
