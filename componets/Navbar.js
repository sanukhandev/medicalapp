import { Image, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const NavBar = () => {
  return (
    <View style={styles.container}>
      <Icon
        style={[styles.headerContainer, styles.title]}
        name="search"
        size={20}
        color="#1865a3"
      />
      <Image
        source={{
          uri: "https://randomuser.me/api/portraits/women/84.jpg",
        }}
        style={[styles.headerContainer, styles.circleImage]}
      />
      <Icon
        style={[styles.headerContainer, styles.title]}
        name="calendar"
        size={20}
        color="#1865a3"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerContainer: {
    marginTop: 10,
  },
  title: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  circleImage: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
  },
});

export default NavBar;
