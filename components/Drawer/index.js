import { View, Image, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function DrawerContent(props) {
    const router = useRouter();
    const year = new Date().getFullYear();

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
                        router.replace('/');  // Navigate to the root (login screen)
                        Alert.alert('Logged Out', 'You have successfully logged out.', [{ text: 'OK' }]);
                    },
                    style: 'default',
                },
            ],
            { cancelable: false }
        );
    };

    const { top, bottom } = useSafeAreaInsets();

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView
                {...props}
                scrollEnabled={true}
                contentContainerStyle={{ paddingTop: top }}
            >
                <View
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        paddingTop: 20 + top,
                        paddingBottom: 20
                    }}
                >
                    <Image source={require('../../assets/logo.png')} style={{ alignSelf: 'center', height: 150, width: 150 }} />
                </View>
                <DrawerItemList {...props} />

                {/* Custom Logout Button */}
                <TouchableOpacity
                    style={styles.logoutButton}
                    onPress={handleLogout}
                >
                    <MaterialCommunityIcons name="logout" size={20} color="#fff" style={styles.logoutIcon} />
                    <Text style={styles.logoutText}>Log Out</Text>
                </TouchableOpacity>
            </DrawerContentScrollView>

            {/* Footer */}
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingBottom: 20 + bottom
                }}
            >
                <Text>
                    Copyright &copy; {year}. All rights reserved
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#44ffb1',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 430,
    },
    logoutText: {
        fontSize: 18,
        color: '#fff',
        marginLeft: 10,  // Space between icon and text
    },
    logoutIcon: {
        marginRight: 10,  // Space between icon and text
    },
});
