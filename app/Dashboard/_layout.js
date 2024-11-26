import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        {/* Home Screen */}
        <Drawer.Screen
          name="index" // This corresponds to the Home screen (index.js)
          options={{
            drawerLabel: 'Home',  // Label displayed in the drawer
            title: 'Overview',    // Title for the screen
          }}
        />

        {/* Add more screens to the drawer if needed */}
        <Drawer.Screen
          name="UserProfile"  // Corresponds to the UserProfile screen (UserProfile.js)
          options={{
            drawerLabel: 'Profile',
            title: 'User Profile',
          }}
        />

        <Drawer.Screen
          name="Settings"  // Corresponds to the Settings screen (Settings.js)
          options={{
            drawerLabel: 'Settings',
            title: 'Settings',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
