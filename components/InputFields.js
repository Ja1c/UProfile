import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const InputFields = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default InputFields;
