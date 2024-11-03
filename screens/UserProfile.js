import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Switch, Alert, Linking, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Pictures from '../components/Pictures';

const accentColor = '#44ffb1';
const iconColor = '#44ffb1';

const UserProfile = ({ navigation }) => { 
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = React.useState(false);
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
            navigation.navigate('Log In');
            Alert.alert('Logged Out', 'You have successfully logged out.', [{ text: 'OK' }]);
          },
          style: 'default',
        },
      ],
      { cancelable: false }
    );
  };

  const openLink = (url) => {
    Linking.openURL(url).catch(err => console.error("Failed to open link:", err));
  };

  return (
    <View style={[styles.container, isDarkMode ? styles.darkContainer : styles.lightContainer]}>
      {isDarkMode && (
        <View style={styles.starsContainer}>
          {stars.map((star, index) => (
            <View key={index} style={[styles.star, { top: star.top, left: star.left }]} >
              <Text style={styles.starText}>⭐</Text>
            </View>
          ))}
        </View>
      )}

      <View style={styles.coverPhotoContainer}>
        <Image
          style={styles.coverPhoto}
          source={require('../assets/cover.jpg')}
        />
      </View>

      <View style={styles.profilePictureContainer}>
        <Image
          style={styles.avatar}
          source={require('../assets/profile.jpg')}
        />
      </View>

      <View style={styles.profileInfo}>
        <Text style={[styles.name, isDarkMode ? styles.darkText : styles.lightText]}>Ezra Mariñas</Text>
        <Text style={[styles.joined, isDarkMode ? styles.darkText : styles.lightText]}>BSIT-3R10</Text>
        <Text style={[styles.bio, isDarkMode ? styles.darkText : styles.lightText]}>
          Rawr🦖
        </Text>
      </View>

      <View style={styles.externalLinksSection}>
        <TouchableOpacity style={styles.menuItem} onPress={() => openLink('https://github.com/Ja1c')}>
          <View style={styles.iconContainer}>
            <Icon name="logo-github" size={24} color={iconColor} />
          </View>
          <Text style={[styles.menuText, isDarkMode ? styles.darkText : styles.lightText]}>GitHub</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => openLink('https://expo.dev/accounts/ja1c')}>
          <View style={styles.iconContainer}>
            <Icon name="logo-electron" size={24} color={iconColor} />
          </View>
          <Text style={[styles.menuText, isDarkMode ? styles.darkText : styles.lightText]}>Expo Go</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => setIsSettingsOpen(!isSettingsOpen)} style={[styles.menuItem, { marginTop: 30 }]}>
        <View style={styles.iconContainer}>
          <Icon name="settings-outline" size={24} color={iconColor} />
        </View>
        <Text style={[styles.menuText, isDarkMode ? styles.darkText : styles.lightText]}>Settings</Text>
      </TouchableOpacity>

      {isSettingsOpen && (
        <View style={styles.settingsDropdown}>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.iconContainer}>
              <Icon name="person-outline" size={24} color={iconColor} />
            </View>
            <Text style={[styles.menuText, isDarkMode ? styles.darkText : styles.lightText]}>Manage User</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.iconContainer}>
              <Icon name="notifications-outline" size={24} color={iconColor} />
            </View>
            <Text style={[styles.menuText, isDarkMode ? styles.darkText : styles.lightText]}>Notifications</Text>
          </TouchableOpacity>

          <View style={styles.menuItem}>
            <View style={styles.iconContainer}>
              <Icon 
                name="moon-outline" 
                size={24} 
                color={isDarkMode ? '#FFD700' : iconColor}
                style={isDarkMode ? styles.glow : null} 
              />
            </View>
            <Text style={[styles.menuText, isDarkMode ? styles.darkText : styles.lightText]}>Dark Mode</Text>
            <Switch
              value={isDarkMode}
              onValueChange={toggleDarkMode}
              style={styles.switch}
            />
          </View>
        </View>
      )}

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={handleLogout}
      >
        <Icon name="log-out-outline" size={20} color="#fff" style={styles.logoutIcon} />
        <Text style={styles.logoutText}>Sign Out</Text>
      </TouchableOpacity>
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
    borderWidth: 2,
    borderColor: accentColor,
  },
  profileInfo: {
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  joined: {
    fontSize: 18,
    marginBottom: 5,
  },
  bio: {
    fontSize: 16,
    marginBottom: 10,
  },
  externalLinksSection: {
    marginTop: -20,
    width: '100%',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 0,
    width: '100%',
  },
  settingsDropdown: {
    paddingLeft: 50,
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
  switch: {
    marginLeft: 'auto',
  },
  logoutButton: {
    position: 'absolute',
    left: 20,
    bottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: accentColor,
    borderRadius: 8,
  },
  logoutText: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 5,
  },
  logoutIcon: {
    marginRight: 5,
  },
  lightText: {
    color: '#000',
  },
  darkText: {
    color: '#fff',
  },
  glow: {
    textShadowColor: '#FFD700',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
});

export default UserProfile;
