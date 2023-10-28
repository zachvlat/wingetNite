import { SafeAreaProvider } from 'react-native-safe-area-context';
import TitleBar from "./components/TitleBar"
import MyDivider from './components/MyDivider';

export default function App() {
  return (
    
    <SafeAreaProvider>
      <TitleBar></TitleBar>
      <MyDivider></MyDivider>
    </SafeAreaProvider>
  );
}
