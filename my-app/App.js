import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import Texto from './src/textoMenu';
import Vaca from './src/variavel';

export default function App() {
  return (
    <View style={styles.container}>
      <Vaca valor={'Primeiro texto'}/>
      <Vaca valor={'Segundo texto'}/>
      <Vaca valor={'Terceiro texto'}/>
      <StatusBar Terciario="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8f4b',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
