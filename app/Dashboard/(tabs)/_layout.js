import React from 'react';
import { Tabs } from 'expo-router';
import Icon from 'react-native-vector-icons/Ionicons';

const DashboardLayout = () => {
  const activeTabColor = '#44ffb1'; // Active tab panel background color
  const inactiveTabColor = '#fff'; // Inactive tab panel background color
  const activeIconColor = '#000'; // Active icon color
  const inactiveIconColor = '#44ffb1'; // Inactive icon color
  const iconSize = 24;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60, // Uniform height for the tab bar
        },
        tabBarItemStyle: {
          flex: 1, // Make the entire tab clickable
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarActiveBackgroundColor: activeTabColor,
          tabBarInactiveBackgroundColor: inactiveTabColor,
          tabBarIcon: ({ focused }) => (
            <Icon
              name="home-outline"
              size={iconSize}
              color={focused ? activeIconColor : inactiveIconColor}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="UserProfile"
        options={{
          title: 'Profile',
          tabBarActiveBackgroundColor: activeTabColor,
          tabBarInactiveBackgroundColor: inactiveTabColor,
          tabBarIcon: ({ focused }) => (
            <Icon
              name="person-outline"
              size={iconSize}
              color={focused ? activeIconColor : inactiveIconColor}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Settings"
        options={{
          title: 'Settings',
          tabBarActiveBackgroundColor: activeTabColor,
          tabBarInactiveBackgroundColor: inactiveTabColor,
          tabBarIcon: ({ focused }) => (
            <Icon
              name="settings-outline"
              size={iconSize}
              color={focused ? activeIconColor : inactiveIconColor}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default DashboardLayout;
