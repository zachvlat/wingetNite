import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider, Appbar } from 'react-native-paper';
import Fab from './components/Fab';
import MainTabs from './components/MainTabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <PaperProvider>
        <Appbar.Header>
          <Appbar.Content title="WingetNite" />
        </Appbar.Header>
        <MainTabs></MainTabs>
        <Fab></Fab>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
