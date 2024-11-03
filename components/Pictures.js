import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Pictures = () => {
  return (
    <View>
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
    </View>
  );
};

const styles = StyleSheet.create({
  coverPhotoContainer: {
    width: '100%',
    height: 150,
    overflow: 'hidden',
    borderRadius: 10,
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
    borderColor: '#44ffb1',
  },
});

export default Pictures;
