import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, StatusBar } from "react-native";
import TopHeader from "../Components/_top";

const cardData = [
    { id: 1, name: "Dev World", image: "https://cdn.discordapp.com/icons/894743742127407144/7d8c3ff78630720582b74c0ec92d9af0.webp?size=96" },
    { id: 2, name: "Rocketseat", image: "https://cdn.discordapp.com/icons/327861810768117763/1ece147ae4cc3c1a3e734078914b4aa8.webp?size=96" },
    { id: 3, name: "Expo Dev", image: "https://cdn.discordapp.com/icons/695411232856997968/4288e026b4b8290eb1e58519fd7e0cd5.webp?size=96" },
    { id: 4, name: "Chorume", image: "https://cdn.discordapp.com/icons/1241014771147604048/0e08beecfc48ed98bddb28073b017629.webp?size=96" },
];

const postData = [
    {
        id: 1,
        name: "Caynnan",
        avatar: "https://cdn.discordapp.com/attachments/1257791544975560775/1284988815920074863/787fa520931ea6d5c3fba95c417566b4.gif?ex=6703a957&is=670257d7&hm=354b33023820b3938b5848ba48888109daaea4cfc4178333993385a7e517b573&",
        content: "Acabei de lançar meu novo projeto de app! 🎉",
    },
    {
        id: 2,
        name: "Dev World",
        avatar: "https://via.placeholder.com/50",
        content: "Aprendendo React Native, muito legal!",
    },
    {
        id: 3,
        name: "Rocketseat",
        avatar: "https://via.placeholder.com/50",
        content: "Novo curso sobre TypeScript no ar! 🚀",
    },
    {
        id: 4,
        name: "Expo Dev",
        avatar: "https://via.placeholder.com/50",
        content: "Experimentei a nova atualização do Expo, incrível!",
    },
];

const Home = () => {
    return (
        <ScrollView style={styles.container}>
            <TopHeader />
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Mais Visitados:</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {cardData.map(item => (
                        <View key={item.id} style={styles.card}>
                            <Image source={{ uri: item.image }} style={styles.cardImage} />
                            <Text style={styles.cardName}>{item.name}</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Melhores Avaliados:</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {cardData.map(item => (
                        <View key={item.id} style={styles.card}>
                            <Image source={{ uri: item.image }} style={styles.cardImage} />
                            <Text style={styles.cardName}>{item.name}</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Posts da Galera:</Text>
                {postData.map(post => (
                    <View key={post.id} style={styles.postContainer}>
                        <View style={styles.avatarContainer}>
                            <Image source={{ uri: post.avatar }} style={styles.avatar} />
                        </View>
                        <View style={styles.postContent}>
                            <Text style={styles.postName}>{post.name}</Text>
                            <Text style={styles.postText}>{post.content}</Text>
                        </View>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

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
    card: {
        backgroundColor: '#1a1a1a',
        borderRadius: 10,
        padding: 10,
        marginRight: 10,
        alignItems: 'center',
    },
    cardImage: {
        width: 100,
        height: 150,
        borderRadius: 10,
        objectFit: 'cover',
    },
    cardName: {
        color: 'tomato',
        marginTop: 5,
        textAlign: 'center',
    },
    postContainer: {
        flexDirection: 'row',
        backgroundColor: '#1a1a1a',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        alignItems: 'center',
    },
    avatarContainer: {
        borderWidth: 2,
        borderColor: 'tomato',
        borderRadius: 25,
        overflow: 'hidden',
        marginRight: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    postContent: {
        flex: 1,
    },
    postName: {
        color: 'white',
        fontWeight: 'bold',
    },
    postText: {
        color: 'white',
        marginTop: 5,
    },
});

export default Home;
