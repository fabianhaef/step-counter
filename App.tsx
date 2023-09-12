import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

type ValueProps = {
  label: string;
  value: string;
}

const Value = ({ label, value }: ValueProps) => (
  <View>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
)

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
  label: {
    color: 'white',
    fontSize: 20,
  },
  value: {
    fontSize: 45,
    color: '#AFB3BE',
    fontWeight: '500',
  }
});
