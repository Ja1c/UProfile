import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const NameInput = ({ value, onChangeText }) => {
  return (
    <TextInput
      placeholder="Name"
      value={value}
      onChangeText={onChangeText}
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
});

export default NameInput;
