import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hecho en la Comision 56680</Text>
      <View style={styles.separator}></View>
      <Text>Profesor: Pablo Macia</Text>
      <View style={styles.separator}></View>
      <Text>Tutor: Simon Gorojovsky</Text>
      <View style={styles.separator}></View>
      <Text>Alumno: Martin Carrizo</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '80%',
    marginVertical: 10,
  },
});
