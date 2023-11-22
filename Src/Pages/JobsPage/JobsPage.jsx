import React, { useEffect, useState } from "react";
import {
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

const JobsPage = () => {
  const [jobData, setJobData] = useState([]);
  const [level, setLevel] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  console.log(jobData);
  if (loading) return <Loading />;
  if (error) return <ErrorComponent />;

  const renderData = ({ item }) => (
    <View>
      <Text>{item.name}</Text>
      {/* Include other relevant data here */}
    </View>
  );

  return (
    <View>
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
        data={jobData}
        renderItem={renderData}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filter_container: {
    alignContent: "center",
    justifyContent: "center",
    width: 200,
    height: 50,

    backgroundColor: "#e0e0e0",
    borderColor: "black",
    borderWidth: 1,
    marginHorizontal: 3,
  },
  filter_box: {
    textAlign: "center",
    fontSize: 20,
  },
});
export default JobsPage;
