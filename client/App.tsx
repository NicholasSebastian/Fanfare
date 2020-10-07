import React from 'react';
import { View, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Layout from './src/pages/overview/layout';

const aspectRatio = { width: 9, height: 18 };
let { width, height } = Dimensions.get('window');

const expectedHeight = (width / aspectRatio.width) * aspectRatio.height;
const expectedWidth = (height / aspectRatio.height) * aspectRatio.width;
if (height > expectedHeight) 
  height = expectedHeight;
else width = expectedWidth;

export default function App() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#000',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <View style={{
        width: width,
        height: height,
      }}>
        <StatusBar style="light" />
        <Layout />
      </View>
    </View>
  );
}
