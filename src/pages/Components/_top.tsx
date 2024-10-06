import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const TopHeader = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>DevHub</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#121212',
        paddingTop: 10,
        paddingBottom: 10,
        gap: 10,
    },
    title: {
        color: 'tomato',
        fontSize: 28,
        fontWeight: 'bold',
    },
});

export default TopHeader;