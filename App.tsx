import React from 'react';
import Main from './src/screens/Main';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Main />
    </GestureHandlerRootView>
  );
}
