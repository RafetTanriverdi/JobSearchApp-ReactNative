import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import JobsPage from "../Pages/JobsPage/JobsPage";
import JobsDetails from "../Pages/JobsDetails/JobsDetails";
import FavoriteDetails from "../Pages/FavoriteDetails/FavoriteDetails";
import FavoritePage from "../Pages/FavoritePage/FavoritePage";
import { AntDesign } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Jobs = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="jobsstack"
        component={JobsPage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="jobs Details " component={JobsDetails} />
    </Stack.Navigator>
  );
};
const Favorite = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="favoritestack"
        component={FavoritePage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="favorite Details" component={FavoriteDetails} />
    </Stack.Navigator>
  );
};

const Routing = () => {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerLeft: () => {
          return (
            <AntDesign
              name="menu-unfold"
              style={{ marginLeft: 10 }}
              size={24}
              color="black"
              onPress={navigation.toggleDrawer}
            />
          );
        },
      })}
    >
      <Drawer.Screen name="Jobs" component={Jobs} />
      <Drawer.Screen name="Favorite" component={Favorite} />
    </Drawer.Navigator>
  );
};

export default Routing;
