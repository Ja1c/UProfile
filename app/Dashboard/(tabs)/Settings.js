import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';  // Import useRouter for navigation

const accentColor = '#44ffb1';

const Settings = () => {
  const router = useRouter();  // Initialize router for navigation

  const handleLogout = () => {
    Alert.alert(
      'Confirm Sign Out',
      'Are you sure you want to log out?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Logout cancelled'),
          style: 'cancel',
        },
        {
          text: 'Log Out',
          onPress: () => {
            router.push('/');  // Navigate to the root of the app (app/index)
            Alert.alert('Logged Out', 'You have successfully logged out.', [{ text: 'OK' }]);
          },
          style: 'default',
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>THIS IS SETTINGS!</Text>

      {/* Other settings options like Notifications, Profile Edit, etc. */}

      {/* Log Out Button */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={handleLogout}
      >
        <Icon name="log-out-outline" size={20} color="#fff" style={styles.logoutIcon} />
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#44ffb1',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 300,  // Adjusted position if needed
  },
  logoutText: {
    fontSize: 18,
    color: '#fff',
  },
  logoutIcon: {
    marginRight: 10,
  },
});

export default Settings;
