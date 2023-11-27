import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import React from "react";

const JobCard = ({ data, onSelect }) => {
  const { levels } = data;
  const { locations } = data;
  const { categories } = data;
  const { name } = data;

  return (
    <TouchableWithoutFeedback onPress={onSelect} >
      <View style={styles.container}>
        <Text style={styles.job}>{name}</Text>
        <Text style={styles.company_name}>
          {data.company.name} - ({locations.map((item) => item.name)}){" "}
        </Text>
        <Text style={styles.categories}>
          {categories.map((item) => item.name)} -{" "}
          {levels.map((item) => item.name)}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default JobCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EBF3E8",
    flex: 1,
    padding: 10,
    borderBottomWidth: 0.8,
  },
  job: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
