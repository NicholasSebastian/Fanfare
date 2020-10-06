import React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Layout from './src/pages/overview/layout';

const aspectRatio = { width: 9, height: 16 };
const { width, height } = useWindowDimensions();

const expectedHeight = (width / aspectRatio.width) * aspectRatio.height;
// if (height > expected height) ;

export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <StatusBar style="light" />
      <Layout />
    </View>
  );
}
