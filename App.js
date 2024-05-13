import 'react-native-gesture-handler';
import React from 'react'
import { Routes } from './src/routes'
import { AuthProvider } from './src/context/AuthContext';
import { CheckListProvider } from './src/context/CheckListContext';

import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <AuthProvider>
      <CheckListProvider>
        <StatusBar translucent={true} backgroundColor="transparent" />
        <Routes />
      </CheckListProvider>
    </AuthProvider>
  )
}
