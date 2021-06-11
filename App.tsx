import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import RootStackNavigator from "./src/navigation/RootStackNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <RootStackNavigator />
    </NavigationContainer>
  );
};

export default App;
