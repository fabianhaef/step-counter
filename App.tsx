import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Value from './src/components/Value';
import RingProgress from './src/components/RingProgress';

export default function App() {
  return (
    <View style={styles.container}>
      <RingProgress radius={100} strokeWidth={35} progress={0.25}/>
      <View style={styles.values}>
        <Value label="Steps" value="1210" />
        <Value label="Distance" value="12" />
        <Value label="Flights climbed" value="12" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c0c0c',
    justifyContent: 'center',
    padding: 12,
  },
  values: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 100,
    gap: 50,
  },
});
