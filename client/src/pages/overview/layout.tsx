import React from 'react';
import { View } from 'react-native';
import { useState } from 'react';

import Header from '../../components/header';
import BottomNav from '../../components/bottomNav';

import Home from './home';
import Characters from './characters';
import Summons from './summons';
import Shops from './shops';

export default function Layout() {
    const [page, setPage] = useState<number>(0);

    const content: JSX.Element[] = [
        <Home />,
        <Characters />,
        <Summons />,
        <Shops />
    ];

    return (
        <View style={{flex: 1}}>
            <Header />
                <View style={{flex: 8}}>
                {content[page]}
                </View>
            <BottomNav setPage={setPage} />
        </View>
    );
}