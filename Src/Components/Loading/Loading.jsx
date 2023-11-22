import React, { useEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";
import AnimatedLottieView from "lottie-react-native";

const Loading = () => {
  const loadingAnimation = useRef(null);

  useEffect(() => {
    loadingAnimation.current?.reset();
    setTimeout(() => {
      loadingAnimation.current?.play();
    }, 0);
  }, []);

  return (
    <View style={styles.animationContainer}>
      <AnimatedLottieView
        autoPlay
        ref={loadingAnimation}
        style={{
          width: 200,
          height: 200,
        }}
        source={require("../../Assets/Loading.json")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default Loading;
