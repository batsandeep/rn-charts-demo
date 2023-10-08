import 'react-native-gesture-handler';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Graph } from './components';

const App = gestureHandlerRootHOC(() => {
  return (
    <View style={styles.container}>
      <Graph />
      <StatusBar style="auto" />
    </View>
  );
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
