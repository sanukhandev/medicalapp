import { StatusBar, StyleSheet, Text, View } from "react-native";
import AppoinmentCard from "../componets/AppoinmentCard";

import Conatiner from "../componets/Container";
import DateCapsuleConatiner from "../componets/DateCapsuleConatiner";
import NavBar from "../componets/Navbar";

const Home = () => {
  return (
    <Conatiner styles={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#fff"
        translucent={true}
      />
      <NavBar />
      <DateCapsuleConatiner />
      <AppoinmentCard selected={true} />
      <AppoinmentCard />
      <AppoinmentCard />
      <AppoinmentCard />
    </Conatiner>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
  },
});

export default Home;
