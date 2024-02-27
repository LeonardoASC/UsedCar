import 'react-native-gesture-handler';
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Routes } from './src/routes'
import { AuthProvider } from './src/context/AuthContext';
const colors = {
  primary: '#945'
}


export default function App() {

  return (
    <AuthProvider>
      <ThemeProvider theme={colors}>
        <Routes />
      </ThemeProvider>
    </AuthProvider>
  )
}
