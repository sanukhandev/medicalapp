import { SafeAreaView } from "react-native";

const Conatiner = (props) => (
  <SafeAreaView style={props.styles}>{props.children}</SafeAreaView>
);

export default Conatiner;
