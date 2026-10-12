import { StyleSheet as StyleSheetKBH, Text as TextKBH, View as ViewKBH } from "react-native";

export default function HeaderKBH() {
  return (
    <ViewKBH style={stylesKBH.container}>
      <TextKBH style={stylesKBH.title}>My Task Manager</TextKBH>
    </ViewKBH>
  );
}

const stylesKBH = StyleSheetKBH.create({
  container: {
    alignItems: "center",
    backgroundColor: "#1565c0",
    padding: 16,
  },
  title: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
