import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import httpRequest from "../../Network/httpRequest";
import Loading from "../../Components/Loading/Loading";
import ErrorComponent from "../../Components/ErrorComponent/ErrorComponent";
import RenderHTML from "react-native-render-html";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "../../Redux/slice";

const JobsDetails = (props) => {
  const { jobId } = props.route.params;

  const [jobData, setJobData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const favorites = useSelector((state) => state.favorites);

  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    httpRequest
      .get(`/jobs/${jobId}`)
      .then((res) => {
        setJobData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;
  if (error) return <ErrorComponent />;

  console.log(jobData);

  const handleAddToFavorites = (data) => {
    const item = {
      id: data.id,
      name: data.name,
      location: data.locations,
      categories: data.categories,
    };
    console.log(data);
    dispatch(addFavorite(item));
  };

  const source = {
    html: jobData.contents,
  };

  const width = Dimensions.get("window").width;
  return (
    <View style={styles.details_container}>
      <ScrollView style={styles.content}>
        <RenderHTML contentWidth={width} source={source} />

        <Button
          title="Add Favorite"
          onPress={() => handleAddToFavorites(jobData)}
        />
      </ScrollView>
    </View>
  );
};

export default JobsDetails;

const styles = StyleSheet.create({
  details_container: { flex: 1 },
  content: {
    flex: 1,
    paddingHorizontal: 10,
  },
});
