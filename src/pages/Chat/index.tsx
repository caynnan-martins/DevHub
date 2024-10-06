import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, StatusBar } from "react-native";
import TopHeader from "../Components/_top";

const userData = [
    {
        id: 1,
        name: "Caynnan Martins",
        avatar: "https://cdn.discordapp.com/attachments/1257791544975560775/1284988815920074863/787fa520931ea6d5c3fba95c417566b4.gif?ex=6703a957&is=670257d7&hm=354b33023820b3938b5848ba48888109daaea4cfc4178333993385a7e517b573&",
        bio: "Desenvolvedor Fullstack",
    },
    {
        id: 2,
        name: "Dev World",
        avatar: "https://via.placeholder.com/50",
        bio: "Explorando novas tecnologias",
    },
    {
        id: 3,
        name: "Rocketseat",
        avatar: "https://via.placeholder.com/50",
        bio: "Aprendendo com a comunidade",
    },
    {
        id: 4,
        name: "Expo Dev",
        avatar: "https://via.placeholder.com/50",
        bio: "Focado em desenvolvimento mobile",
    },
];

export default function ChatList() {
    return (
        <ScrollView style={styles.container}>
            <TopHeader />
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Contatos:</Text>
                {userData.map(user => (
                    <View key={user.id} style={styles.userContainer}>
                        <View style={styles.avatarContainer}>
                            <Image source={{ uri: user.avatar }} style={styles.avatar} />
                        </View>
                        <View style={styles.userInfo}>
                            <Text style={styles.userName}>{user.name}</Text>
                            <Text style={styles.userBio}>{user.bio}</Text>
                        </View>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        padding: 20,
        paddingTop: StatusBar.currentHeight || 0,
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    userContainer: {
        flexDirection: 'row',
        backgroundColor: '#1a1a1a',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        alignItems: 'center',
    },
    avatarContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: 'tomato',
        overflow: 'hidden', // Garante que a borda não ultrapasse o círculo
        marginRight: 10,
    },
    avatar: {
        width: '100%',
        height: '100%',
        borderRadius: 25,
    },
    userInfo: {
        flex: 1,
    },
    userName: {
        color: 'white',
        fontWeight: 'bold',
    },
    userBio: {
        color: 'white',
        marginTop: 5,
    },
});
