import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AppTabNavigator from "./src/navigation/AppTabNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <AppTabNavigator />
    </NavigationContainer>
  );
};

export default App;
