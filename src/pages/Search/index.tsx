import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput, StatusBar } from "react-native";
import TopHeader from "../Components/_top";

const data = [
    { id: 1, title: "React Native", description: "Framework para desenvolvimento mobile." },
    { id: 2, title: "JavaScript", description: "Linguagem de programação popular." },
    { id: 3, title: "Node.js", description: "Ambiente de execução JavaScript no servidor." },
    { id: 4, title: "Expo", description: "Ferramenta para desenvolvimento de aplicativos React Native." },
    { id: 5, title: "TypeScript", description: "Superset do JavaScript com tipagem estática." },
];

export default function Search() {
    const [query, setQuery] = useState("");

    const filteredData = data.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <ScrollView style={styles.container}>
            <TopHeader />
            <TextInput
                style={styles.searchInput}
                placeholder="Pesquisar..."
                placeholderTextColor="#aaa"
                value={query}
                onChangeText={text => setQuery(text)}
            />
            <View style={styles.section}>
                {filteredData.map(item => (
                    <View key={item.id} style={styles.resultContainer}>
                        <Text style={styles.resultTitle}>{item.title}</Text>
                        <Text style={styles.resultDescription}>{item.description}</Text>
                    </View>
                ))}
                {filteredData.length === 0 && (
                    <Text style={styles.noResults}>Nenhum resultado encontrado.</Text>
                )}
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
    searchInput: {
        backgroundColor: '#1a1a1a',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
        color: 'white',
    },
    section: {
        marginBottom: 20,
    },
    resultContainer: {
        backgroundColor: '#1a1a1a',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    resultTitle: {
        color: 'tomato',
        fontWeight: 'bold',
    },
    resultDescription: {
        color: 'white',
        marginTop: 5,
    },
    noResults: {
        color: 'white',
        marginTop: 10,
        textAlign: 'center',
    },
});
