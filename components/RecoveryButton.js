import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const RecoveryButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.recoveryButton} onPress={onPress}>
      <Text style={styles.buttonText}>Send Recovery Email</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  recoveryButton: {
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

export default RecoveryButton;
