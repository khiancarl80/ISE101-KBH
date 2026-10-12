import { View as Viewkbh, Text as Textkbh, StyleSheet as StyleSheetkbh } from "react-native";

export default function Footerkbh() {
  return (
    <Viewkbh style={styleskbh.footer}>
      <Textkbh style={styleskbh.text}>© 2025 Student App Project</Textkbh>
    </Viewkbh>
  );
}

const styleskbh = StyleSheetkbh.create({
  footer: {
    padding: 10,
    backgroundColor: "#F1F1F1",
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    color: "#555555",
  },
});
