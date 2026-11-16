import { StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.description}>Your Campus Connect profile will appear here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#F4F7FB',
  },
  title: {
    color: '#111111',
    fontSize: 26,
    fontWeight: '700',
  },
  description: {
    marginTop: 8,
    color: '#526070',
    fontSize: 15,
  },
});
