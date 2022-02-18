import { Image, StyleSheet, Text, View } from "react-native";

const AppoinmentCard = ({ selected }) => {
  return (
    <View style={[styles.container, !selected && styles.nonSlected]}>
      <View style={styles.infoSec}>
        <Text style={styles.timeSec}>8:00 am</Text>
        <Text style={[styles.labName, !selected && styles.nonSlectedText]}>
          Synicle Lab - 1
        </Text>
        <Text style={[styles.locationName, !selected && styles.nonSlectedText]}>
          Milan, Italy
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    height: 100,
    backgroundColor: "#206df1",
    flexDirection: "row",
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

  nonSlected: {
    backgroundColor: "#d1e9fc",
  },
  infoSec: {
    marginLeft: 15,
  },
  timeSec: {
    height: 20,
    width: 60,
    paddingLeft: 10,
    paddingTop: 2,
    backgroundColor: "#fff",
    color: "#8e8e8e",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
  labName: {
    marginTop: 5,
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  nonSlectedText: {
    color: "#1865a3",
  },
  locationName: {
    marginTop: 5,
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 14,
    fontWeight: "bold",
  },
});
export default AppoinmentCard;
