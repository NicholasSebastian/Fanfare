import React from 'react';
import { View } from 'react-native';
import { useState } from 'react';

import Header from '../../components/header';
import BottomNav from '../../components/bottomNav';

import Home from './home';
import Characters from './characters';
import Summons from './summons';
import Shops from './shops';
import Others from './others';

export default function Layout() {
    const [page, setPage] = useState<number>(0);

    const content: JSX.Element[] = [
        <Home />,
        <Characters />,
        <Summons />,
        <Shops />,
        <Others />
    ];

    return (
        <View style={{flex: 1}}>
            <Header />
                <View style={{
                    flex: 1,
                    backgroundColor: 'darkblue'
                }}>
                {content[page]}
                </View>
            <BottomNav setPage={setPage} />
        </View>
    );
}