import { StyleSheet as StyleSheetKBH, Text as TextKBH, View as ViewKBH } from "react-native";

export default function FooterKBH() {
  return (
    <ViewKBH style={stylesKBH.container}>
      <TextKBH style={stylesKBH.text}>One task at a time.</TextKBH>
    </ViewKBH>
  );
}

const stylesKBH = StyleSheetKBH.create({
  container: {
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    padding: 12,
  },
  text: {
    color: "#555555",
    fontSize: 14,
  },
});
