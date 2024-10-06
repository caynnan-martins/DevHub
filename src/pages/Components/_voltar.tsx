import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const VoltarHeader = () => {
    const navigation = useNavigation();

    const onBackPress = () => {
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
                <Icon name="arrow-left" size={20} color="white" />
            </TouchableOpacity>
            <Text onPress={onBackPress} style={styles.title}>Voltar</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#121212',
        padding: 10,
        gap: 10,
    },
    backButton: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    title: {
        color: 'tomato',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default VoltarHeader;