import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import LoginSc from '../Login/index'; // Certifique-se de que o caminho está correto
import HomeSc from '../Home/index';
import ProfileSc from '../Profile/index'
import ChatListSc from '../Chat';
import SearchSc from  '../Search'
import MentionedSc from '../Mentioned';
const Tab = createBottomTabNavigator();

const HomeScreen = () => (
    <View style={styles.fullContainer}>
        <HomeSc />
    </View>
);

const SettingsScreen = () => (
    <View style={styles.container}>
        <Text style={styles.text}>Settings Screen</Text>
    </View>
);

const ChatListScreen = () => (
    <View style={styles.fullContainer}>
    <ChatListSc />
    </View>
)

const LoginScreen = () => (
    <View style={styles.fullContainer}>
        <ProfileSc />
    </View>
);

const SearchScreen = () => (
    <View style={styles.fullContainer}>
    <SearchSc />
</View>
)

const MentionedScreen = () => (
    <View style={styles.fullContainer}>
    <MentionedSc />
</View>
)

const App = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'home-outline';
                    } else if (route.name === 'Chat') {
                        iconName = 'chatbubble-outline';
                    } else if (route.name === 'Search') {
                        iconName = 'search-outline';
                    }else if (route.name == 'Noti'){
                        iconName = 'at';
                    } else if (route.name === 'Perfil') {
                        iconName = 'person-circle-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'white',
                tabBarStyle: {
                    position: 'relative',
                    padding: '10px',
                    bottom: 0,
                    backgroundColor: '#121212',
                    borderTopWidth: 0, // Remove a borda superior
                    overflow: 'hidden', // Evita qualquer overflow que cause riscos
                },
                tabBarLabel: () => null, // Remove o rótulo
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Chat" component={ChatListScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Noti" component={MentionedScreen} options={{ headerShown: false }} />
            <Tab.Screen name='Perfil' component={LoginScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#111826ff',
    },
    fullContainer: {
        flex: 1,
        backgroundColor: '#111826ff',
        width: '100%',
    },
    text: {
        color: 'white',
    },
});

export default App;