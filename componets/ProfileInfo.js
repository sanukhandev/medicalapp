import { StyleSheet, Text, View } from "react-native";
import Chart from "./Chart";

const ProfileInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.infocontainer}>
        <Text style={styles.H1}>Heart Rate</Text>
        <Text style={styles.capsule}>
          62-145 <Text style={styles.capsuleText}>bpm</Text>
        </Text>
      </View>
      <View style={styles.chartcontainer}>
        <View style={styles.xaxis}>
          <Text style={[styles.axisLabel]}>H</Text>
          <Text style={[styles.axisLabel]}>D</Text>
          <Text style={[styles.axisLabel, styles.slectedAxis]}>W</Text>
          <Text style={[styles.axisLabel]}>M</Text>
          <Text style={[styles.axisLabel]}>6M</Text>
          <Text style={[styles.axisLabel]}>Y</Text>
        </View>
        <Chart />
      </View>
      <View style={styles.info2}>
        <Text style={styles.H1}>History</Text>
        <View style={styles.rows}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#d1e9fc",
    height: 320,
    borderRadius: 20,
    margin: 20,
    padding: 10,
  },
  infocontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  H1: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1865a3",
    marginTop: 5,
  },
  capsule: {
    fontSize: 18,
    color: "white",
    width: 100,
    marginTop: 5,
    height: 30,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 10,
    backgroundColor: "#206df1",
  },
  capsuleText: {
    fontSize: 16,
    color: "#7aa9fb",
  },
  chartcontainer: {
    margin: 10,
    flexDirection: "column",
  },
  xaxis: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
  },
  axisLabel: {
    fontSize: 18,
    color: "#1865a3",
    marginTop: 5,
    height: 30,
  },
  slectedAxis: {
    color: "#206df1",
    backgroundColor: "white",
    padding: 5,
    borderRadius: 15,
  },
  rows: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
});

export default ProfileInfo;
