import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Routing from "./Src/Routes/Routing";
import store from "./Src/Redux/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Routing />
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
