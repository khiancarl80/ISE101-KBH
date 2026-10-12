
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.module}>MODULE 7</Text>
      <Text style={styles.subtitle}>React Native with Expo</Text>
      <Text style={styles.title}>Hello World!</Text>
      <Text style={styles.welcome}>Welcome to React Native</Text>
      <Text style={styles.section}>BSIS 3A</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eaf4ff",
    padding: 24,
  },
  module: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2878a8",
    letterSpacing: 2,
    marginBottom: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#173b63",
    marginBottom: 12,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#173b63",
    marginBottom: 28,
    textAlign: "center",
  },
  welcome: {
    fontSize: 18,
    color: "#526579",
    marginBottom: 16,
    textAlign: "center",
  },
  section: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2878a8",
  },
});
