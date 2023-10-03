import { SafeAreaProvider } from 'react-native-safe-area-context';
import TitleBar from "./TitleBar"
import MyDivider from './MyDivider';

export default function App() {
  return (
    <SafeAreaProvider>
      <TitleBar></TitleBar>
      <MyDivider></MyDivider>
    </SafeAreaProvider>
  );
}
