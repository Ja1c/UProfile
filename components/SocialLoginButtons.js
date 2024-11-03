import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const SocialLoginButtons = () => {
  return (
    <View style={styles.socialContainer}>
      <TouchableOpacity style={styles.iconButton}>
        <MaterialIcons name="email" size={30} color="#DB4437" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <MaterialIcons name="facebook" size={30} color="#4267B2" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  iconButton: {
    marginHorizontal: 10,
    marginBottom: 15,
  },
});

export default SocialLoginButtons;
