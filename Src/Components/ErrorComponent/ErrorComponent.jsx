import React, { useEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";

const ErrorComponent = () => {
  const errorAnimation = useRef(null);
  
  useEffect(() => {
    errorAnimation.current?.reset();
    setTimeout(() => {
      errorAnimation.current?.play();
    }, 0);
  }, []);

  return (
    <View style={styles.animationContainer}>
      <LottieView
        autoPlay
        ref={errorAnimation}
        style={{
          width: 200,
          height: 200,
        }}
        source={require("../../Assets/Error.json")}
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
export default ErrorComponent;
