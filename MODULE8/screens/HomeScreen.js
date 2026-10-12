import { View as Viewkbh, Text as Textkbh, StyleSheet as StyleSheetkbh } from "react-native";
import Headerkbh from "../components/Header";
import Footerkbh from "../components/Footer";
import WelcomeMessagekbh from "../components/WelcomeMessage";

export default function HomeScreenkbh() {
  return (
    <Viewkbh style={styleskbh.container}>
      <Headerkbh />
      <Viewkbh style={styleskbh.body}>
        <WelcomeMessagekbh />
        <Textkbh style={styleskbh.text}>Welcome to your first screen!</Textkbh>
        <Textkbh style={styleskbh.text}>This is built using JSX and components.</Textkbh>
      </Viewkbh>
      <Footerkbh />
    </Viewkbh>
  );
}

const styleskbh = StyleSheetkbh.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
    textAlign: "center",
  },
});
