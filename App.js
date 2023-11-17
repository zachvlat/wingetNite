import React from 'react';
import { Provider as PaperProvider, Appbar } from 'react-native-paper';
import Fab from './components/Fab';
import MainTabs from './components/MainTabs';

export default function App() {
  return (
    <PaperProvider>
      <Appbar.Header>
        <Appbar.Content title="ScoopNite" />
      </Appbar.Header>
      <MainTabs></MainTabs>
      <Fab></Fab>
    </PaperProvider>
  );
}
