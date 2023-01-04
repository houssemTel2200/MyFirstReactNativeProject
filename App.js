import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Calc from './components/Calc';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Calc></Calc>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
