import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const accentColor = '#44ffb1';

const UserProfile = () => {
  const openLink = (url) => {
    Linking.openURL(url).catch(err => console.error("Failed to open link:", err));  // Open URL link
  };

  return (
    <View style={styles.container}>
      <View style={styles.coverPhotoContainer}>
        <Image
          style={styles.coverPhoto}
          source={require('../../../assets/cover.jpg')}
        />
      </View>

      <View style={styles.profilePictureContainer}>
        <Image
          style={styles.avatar}
          source={require('../../../assets/profile.jpg')}
        />
      </View>

      <View style={styles.profileInfo}>
        <Text style={styles.name}>Ezra Mariñas</Text>
        <Text style={styles.joined}>BSIT-3R10</Text>
        <Text style={styles.bio}>Rawr🦖</Text>
      </View>

      <View style={styles.externalLinksSection}>
        <TouchableOpacity style={styles.menuItem} onPress={() => openLink('https://github.com/Ja1c')}>
          <View style={styles.iconContainer}>
            <Icon name="logo-github" size={24} color={accentColor} />
          </View>
          <Text style={styles.menuText}>GitHub</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => openLink('https://expo.dev/accounts/ja1c')}>
          <View style={styles.iconContainer}>
            <Icon name="logo-electron" size={24} color={accentColor} />
          </View>
          <Text style={styles.menuText}>Expo Go</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20,
  },
  coverPhotoContainer: {
    position: 'relative',
    width: '100%',
    height: 150,
    overflow: 'hidden',
    borderRadius: 10,
    marginTop: -10,
    marginBottom: -80,
  },
  coverPhoto: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  profilePictureContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 5,
    borderColor: '#fff',
    backgroundColor: '#e0e0e0',
  },
  profileInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  joined: {
    fontSize: 16,
    color: '#555',
  },
  bio: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#888',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    width: '100%',
  },
  menuText: {
    fontSize: 20,
    marginLeft: 10,
  },
  iconContainer: {
    width: 50,
    alignItems: 'center',
  },
});

export default UserProfile;
