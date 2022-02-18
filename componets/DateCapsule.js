import { TouchableOpacity, Text, StyleSheet } from "react-native";

const DateCapsule = ({ date }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        date.selected = true;
      }}
      style={[styles.capsule, date.selected && styles.selectedCapsule]}
    >
      <Text style={[styles.dateText, date.selected && styles.selectedText]}>
        {date.date}
      </Text>
      <Text style={styles.dateDay}>{date.day}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  dateText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#1865a3",
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

export default DateCapsule;
