import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const PasswordRecoveryScreen = ({ navigation }) => {
  
  const handleSendRecoveryEmail = () => {
    // Show an alert for successful email sending
    Alert.alert("Success!", "Sent Successfully", [
      { text: "OK", onPress: () => navigation.goBack() } 
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Password Recovery</Text>
      <Text style={styles.instructions}>
        Enter your email to receive a password reset link.
      </Text>
      <TextInput placeholder="Email" style={styles.input} />
      <TouchableOpacity style={styles.recoveryButton} onPress={handleSendRecoveryEmail}>
        <Text style={styles.buttonText}>Send Recovery Email</Text>
      </TouchableOpacity>
      <Text style={styles.linkText} onPress={() => navigation.goBack()}>
        Back to Login
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  instructions: {
    textAlign: 'center',
    color: '#666',
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
  linkText: {
    color: '#007BFF',
    textAlign: 'center',
    marginTop: 15,
  },
});

export default PasswordRecoveryScreen;
