import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import JobFavoriteCard from "../../Components/JobFavoriteCard/JobFavoriteCard";

const FavoritePage = () => {
  const favorites = useSelector((state) => state.favorites);

  const favoriteList = favorites.favoriteList;

  console.log(favoriteList);

  const render = ({ item }) => <JobFavoriteCard data={item}/>;

  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteList}
        renderItem={render}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default FavoritePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
