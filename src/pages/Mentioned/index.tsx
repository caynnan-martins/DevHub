import React from "react";
import { View, Text, StyleSheet, ScrollView, StatusBar } from "react-native";
import TopHeader from "../Components/_top";

const mentionedData = [
    {
        id: 1,
        community: "Dev World",
        message: "Você foi mencionado na discussão sobre React!",
    },
    {
        id: 2,
        community: "Rocketseat",
        message: "Caynnan, confira o novo curso que você foi mencionado!",
    },
    {
        id: 3,
        community: "Expo Dev",
        message: "Você foi citado na postagem sobre a nova atualização do Expo.",
    },
    {
        id: 4,
        community: "Chorume",
        message: "Não perca as novas atualizações em que você foi mencionado!",
    },
];

export default function Mentioned() {
    return (
        <ScrollView style={styles.container}>
            <TopHeader />
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Você foi mencionado em:</Text>
                {mentionedData.map(item => (
                    <View key={item.id} style={styles.mentionContainer}>
                        <Text style={styles.communityName}>{item.community}</Text>
                        <Text style={styles.message}>{item.message}</Text>
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
    mentionContainer: {
        backgroundColor: '#1a1a1a',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    communityName: {
        color: 'tomato',
        fontWeight: 'bold',
    },
    message: {
        color: 'white',
        marginTop: 5,
    },
});
