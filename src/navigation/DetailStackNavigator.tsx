/* eslint-disable react/display-name */
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { DetailScreen } from "../screens";
import routes from "./routes";

const Stack = createStackNavigator();

const DetailStackNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={routes.DETAIL} component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default DetailStackNavigator;
