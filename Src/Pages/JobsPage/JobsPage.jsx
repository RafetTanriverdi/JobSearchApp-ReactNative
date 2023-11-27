import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import httpRequest from "../../Network/httpRequest";
import Loading from "../../Components/Loading/Loading";
import ErrorComponent from "../../Components/ErrorComponent/ErrorComponent";
import JobCard from "../../Components/JobCard/JobCard";
import { useNavigation } from "@react-navigation/native";

const ExperienceLevel = [
  {
    id: 0,
    level: "All Levels",
  },
  {
    id: 1,
    level: "Entry Level",
  },
  {
    id: 2,
    level: "Mid Level",
  },
  {
    id: 3,
    level: "Senior Level",
  },
  {
    id: 4,
    level: "management",
  },
  {
    id: 5,
    level: "Internship",
  },
];

const JobsPage = (props) => {
  const [jobData, setJobData] = useState([]);
  const [level, setLevel] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { navigation } = props;

  useEffect(() => {
    setLoading(true);
    httpRequest
      .get(`/jobs?level=${level === "All Levels" ? "" : level}&page=1`)
      .then((res) => {
        setJobData(res.data.results);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [level]);

  if (loading) return <Loading />;
  if (error) return <ErrorComponent />;

  const onSelect = (item) => {
    navigation.navigate("jobs Details", { jobId: item.id, title: item.name });
  };

  const renderData = ({ item }) => (
    <JobCard data={item} onSelect={() => onSelect(item)} />
  );

  return (
    <View style={styles.main_container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {ExperienceLevel.map((item) => (
          <TouchableOpacity
            style={styles.filter_container}
            onPress={() => setLevel(item.level)}
            key={item.id}
          >
            <Text style={styles.filter_box}>{item.level}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <FlatList
        style={styles.flat_list}
        data={jobData}
        renderItem={renderData}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  filter_container: {
    alignContent: "center",
    justifyContent: "center",
    width: 200,
    height: 50,
    backgroundColor: "#e0e0e0",
    borderColor: "black",
    borderWidth: 1,
    marginHorizontal: 3,
    flex: 1,
    marginVertical: 5,
  },
  filter_box: {
    textAlign: "center",
    fontSize: 20,
  },
});
export default JobsPage;
