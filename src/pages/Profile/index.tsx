import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, StatusBar } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Voltar from '../Components/_voltar';

export default function Profile() {
    return (
        <ScrollView style={styles.container}>
            <Voltar />
            <View style={styles.banner}>
                <View style={styles.bannerContainer}>
                    <Image 
                        source={{ uri: 'https://cdn.discordapp.com/attachments/1257791544975560775/1284988815517159445/c5b09ea75421363566c105b3943a901f.gif?ex=6703a957&is=670257d7&hm=c2275e7dce0cb5d2a8e3d89ed6bc3a50d588aadafc08ebf9db8ecc044018ada7&' }} 
                        style={styles.bannerImage} 
                    />
                </View>
                <View style={styles.avatarContainer}>
                    <Image 
                        source={{ uri: 'https://cdn.discordapp.com/attachments/1257791544975560775/1284988815920074863/787fa520931ea6d5c3fba95c417566b4.gif?ex=6703a957&is=670257d7&hm=354b33023820b3938b5848ba48888109daaea4cfc4178333993385a7e517b573&'}} 
                        style={styles.avatarImage} 
                    />
                </View>
            </View>
            <View style={styles.profileInfo}>
                <Text style={styles.username}>Caynnan</Text>
                <View style={styles.badgeContainer}>
                    <Icon name="check-circle" size={20} color="tomato" />
                    <Icon name="laptop" size={20} color="tomato" style={styles.developerIcon} />
                </View>
            </View>
            <View style={styles.statsBox}>
                <View style={styles.statsRow}>
                    <View style={styles.statContainer}>
                        <Text style={styles.statValue}>0</Text>
                        <Text style={styles.statLabel}>Seguidores</Text>
                    </View>
                    <Text style={styles.divider}>|</Text>
                    <View style={styles.statContainer}>
                        <Text style={styles.statValue}>0</Text>
                        <Text style={styles.statLabel}>Seguindo</Text>
                    </View>
                    <Text style={styles.divider}>|</Text>
                    <View style={styles.statContainer}>
                        <Text style={styles.statValue}>0</Text>
                        <Text style={styles.statLabel}>Visitas</Text>
                    </View>
                </View>
            </View>
            <View style={styles.aboutMeBox}>
                <Text style={styles.aboutMeTitle}>Sobre Mim</Text>
                <Text style={styles.aboutMeText}>
                    Aqui você pode adicionar uma breve descrição sobre você. Compartilhe suas paixões, interesses ou qualquer coisa que queira que as pessoas saibam.
                </Text>
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
    banner: {
        marginBottom: 20,
        position: 'relative',
    },
    bannerContainer: {
        borderRadius: 10,
        overflow: 'hidden',
        width: '100%',
    },
    bannerImage: {
        width: '100%',
        height: 200,
    },
    avatarContainer: {
        position: 'absolute',
        bottom: -50,
        left: '50%',
        transform: [{ translateX: -50 }],
        width: 100,
        height: 100,
        borderRadius: 50,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: 'tomato',
    },
    avatarImage: {
        width: '100%',
        height: '100%',
    },
    profileInfo: {
        alignItems: 'center',
        marginTop: 30,
    },
    username: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    badgeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1a1a1a',
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
        gap: 5,
    },
    developerIcon: {
        marginLeft: 5,
    },
    statsBox: {
        backgroundColor: '#1a1a1a',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 0,
        padding: 15,
        marginTop: 20,
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    statContainer: {
        alignItems: 'center',
    },
    statValue: {
        color: 'tomato',
        fontSize: 18,
        fontWeight: 'bold',
    },
    statLabel: {
        color: 'white',
        fontSize: 16,
    },
    divider: {
        color: 'tomato',
        fontSize: 18,
        marginHorizontal: 10,
    },
    aboutMeBox: {
        backgroundColor: '#333333',
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
        width: '100%',
    },
    aboutMeTitle: {
        color: 'tomato',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    aboutMeText: {
        color: 'white',
        fontSize: 16,
    },
});
