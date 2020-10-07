import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>Header</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 110,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 10,
        backgroundColor: 'darkslateblue',
    },
    text: {
        color: '#fff'
    }
});