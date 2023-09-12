import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Value from './src/components/Value';

export default function App() {
  return (
    <View style={styles.container}>
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
    gap: 50,
  },
});
