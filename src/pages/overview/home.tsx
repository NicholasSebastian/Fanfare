import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Home() {

    const CharWindow = () => {
        return (
            <View style={styles.frame}>
                <Text style={{color: '#fff'}}>Unit</Text>
            </View>
        );
    }

    return (
        <View style={styles.body}>
            <View style={styles.frameContainer}>
                <CharWindow />
                <CharWindow />
                <CharWindow />
                <CharWindow />
                <CharWindow />
            </View>
            <Text style={{color: '#fff'}}>Home Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center'
    },
    frameContainer: {
        flexDirection: 'row',
        height: 300
    },
    frame: {
        flex: 1,
        borderColor: '#ff0',
        borderWidth: 4
    }
});