import React from 'react';
import { Provider as PaperProvider, Appbar } from 'react-native-paper';
import Fab from './components/Fab';
import MainTabs from './components/MainTabs';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  return (
    <SafeAreaView>
      <PaperProvider>
        <Appbar.Header>
          <Appbar.Content title="ScoopNite" />
        </Appbar.Header>
        <MainTabs></MainTabs>
        <Fab></Fab>
      </PaperProvider>
    </SafeAreaView>
  );
}
