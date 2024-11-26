import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';
import EmailInput from '../components/EmailInput';
import RecoveryButton from '../components/RecoveryButton';
import { useRouter } from 'expo-router';

const PasswordRecoveryScreen = ({ navigation }) => {
  const router = useRouter(); // Declare router to use expo-router's navigation methods

  const [email, setEmail] = useState('');

  const handleSendRecoveryEmail = () => {
    Alert.alert("Success!", "Sent Successfully", [
      { text: "OK", onPress: () => router.back() } // Use router.back() for going back
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Password Recovery</Text>
      <Text style={styles.instructions}>
        Enter your email to receive a password reset link.
      </Text>
      <EmailInput value={email} onChangeText={setEmail} />
      <RecoveryButton onPress={handleSendRecoveryEmail} />
      <Text style={styles.linkText} onPress={() => router.back()}> {/* Use router.back() */}
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
  linkText: {
    color: '#007BFF',
    textAlign: 'center',
    marginTop: 15,
  },
});

export default PasswordRecoveryScreen;
