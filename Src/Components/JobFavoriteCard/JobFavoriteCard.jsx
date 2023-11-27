import { Button, Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { removeFavorite } from "../../Redux/slice";

const JobFavoriteCard = ({ data }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeFavorite(data.id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.name}</Text>
      <Text style={styles.location}>
        {data.location.map((item) => item.name)}
      </Text>
      <Text style={styles.categories}>
        {data.categories.map((item) => item.name)}
      </Text>
      <Button title="Remove" onPress={handleDelete} />
    </View>
  );
};

export default JobFavoriteCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get("window").height / 6,
    width: Dimensions.get("window").width,
    borderBottomWidth: "0.8",
  },
  title: {
    fontSize: 25,
  },
  location: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "flex-end",
  },
  categories: {
    flex: 1,
    fontSize: 20,
    textAlign: "flex-end",
  },
});
