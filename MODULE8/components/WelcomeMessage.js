import { View as Viewkbh, Text as Textkbh, StyleSheet as StyleSheetkbh } from "react-native";

export default function WelcomeMessagekbh() {
  return (
    <Viewkbh style={styleskbh.container}>
      <Textkbh style={styleskbh.name}>Hello, KHIAN!</Textkbh>
      <Textkbh style={styleskbh.section}>BSIS Section 3A</Textkbh>
    </Viewkbh>
  );
}

const styleskbh = StyleSheetkbh.create({
  container: {
    alignItems: "center",
    marginBottom: 12,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#4A148C",
  },
  section: {
    fontSize: 16,
    color: "#555555",
    marginTop: 4,
  },
});
