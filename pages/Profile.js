import { Button, StatusBar, StyleSheet, Text, View } from "react-native";
import Conatiner from "../componets/Container";
import ProfileHero from "../componets/ProfileHero";
import ProfileInfo from "../componets/ProfileInfo";

const Profile = () => {
  return (
    <Conatiner styles={styles.container}>
      <ProfileHero />
      <ProfileInfo />
    </Conatiner>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
  },
});
export default Profile;
