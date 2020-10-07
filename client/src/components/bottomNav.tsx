import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

type buttonProps = {
    pageIndex: number,
    icon: string
}

type navProps = {
    setPage: React.Dispatch<React.SetStateAction<number>>
}

export default function BottomNav({ setPage }: navProps) {

    const NavButton = ({ pageIndex, icon }: buttonProps) => {
        return (
            <Pressable onPress={() => setPage(pageIndex)}>
                <View>
                    <Text style={{color: '#fff'}}>{icon}</Text>
                </View>
            </Pressable>
        );
    }

    return (
        <View style={styles.nav}>
            <NavButton pageIndex={0} icon="Home" />
            <NavButton pageIndex={1} icon="Char" />
            <NavButton pageIndex={2} icon="Sumn" />
            <NavButton pageIndex={3} icon="Shop" />
            <NavButton pageIndex={4} icon="Etc" />
        </View>
    );
}

const styles = StyleSheet.create({
    nav: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 10,
        backgroundColor: 'darkslateblue',
    }
});