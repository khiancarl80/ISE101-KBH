import { View as Viewkbh, Text as Textkbh, StyleSheet as StyleSheetkbh } from "react-native";

export default function Headerkbh() {
  return (
    <Viewkbh style={styleskbh.header}>
      <Textkbh style={styleskbh.title}>Student Task &amp; Blog App</Textkbh>
    </Viewkbh>
  );
}

const styleskbh = StyleSheetkbh.create({
  header: {
    padding: 20,
    backgroundColor: "#6A1B9A",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
