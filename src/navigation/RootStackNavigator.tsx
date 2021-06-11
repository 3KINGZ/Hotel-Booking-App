/* eslint-disable react/display-name */
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AppTabNavigator from "./AppTabNavigator";
import DetailStackNavigator from "./DetailStackNavigator";
import routes from "./routes";

const Stack = createStackNavigator();

const RootStackNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={routes.APP_TAB} component={AppTabNavigator} />
      <Stack.Screen
        name={routes.DETAIL_STACK}
        component={DetailStackNavigator}
      />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
