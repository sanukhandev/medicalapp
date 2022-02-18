import { ScrollView, StyleSheet, View } from "react-native";
import DateCapsule from "./DateCapsule";

const DateCapsuleConatiner = () => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  let dateVal = [];
  for (var i = 0; i < 7; i++) {
    const dateD = new Date();
    const newDate = new Date(dateD.setDate(new Date().getDate() + i));
    dateVal.push({
      date: newDate.getDate(),
      day: days[newDate.getDay()],
      selected: i === 0 ? true : false,
    });
  }

  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={[styles.dateContainer]}>
          {dateVal.map((date, index) => (
            <DateCapsule date={date} key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  dateContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  dateText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#000",
  },
  dateDay: {
    fontSize: 16,
    color: "#dbdbdb",
  },
  capsule: {
    margin: 10,
    height: 80,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  selectedCapsule: {
    backgroundColor: "#206df1",
    shadowColor: "#206df1",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 1,
    shadowRadius: 15,

    elevation: 15,
  },
  selectedText: {
    color: "#fff",
  },
});

export default DateCapsuleConatiner;
