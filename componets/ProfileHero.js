import { Image, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Animated } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const ProfileHero = () => {
  const AnimatedLinearGradient =
    Animated.createAnimatedComponent(LinearGradient);
  return (
    <AnimatedLinearGradient
      colors={["#cce5ff", "#96d2fb"]}
      style={styles.container}
    >
      <Image
        resizeMode="cover"
        blurRadius={5}
        source={{ uri: "https://randomuser.me/api/portraits/women/25.jpg" }}
        style={styles.image}
      />
      <View style={styles.nav}>
        <View>
          <Icon name="chevron-left" size={25} color="#1865a3" />
        </View>
        <View>
          <Icon name="more-horizontal" size={25} color="#1865a3" />
        </View>
      </View>
      <View style={styles.profile}>
        <Image
          source={{
            uri: "https://randomuser.me/api/portraits/women/25.jpg",
          }}
          style={[styles.circleImage]}
        />
        <Text style={styles.H1}>Evalyn Barnes</Text>
        <Text style={styles.subtext}>29 yo, Female</Text>
      </View>
    </AnimatedLinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#206df1",
    height: 350,
    paddingTop: 25,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: "#206df1",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 1,
    shadowRadius: 15,
    borderRadius: 20,
    elevation: 15,
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 20,
  },
  profile: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  circleImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  H1: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
    marginTop: 5,
  },
  subtext: {
    fontSize: 18,
    color: "#1865a3",
    marginTop: 5,
    height: 30,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 10,
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: 350,
    opacity: 0.5,
    borderRadius: 20,
    position: "absolute",
  },
});

export default ProfileHero;
