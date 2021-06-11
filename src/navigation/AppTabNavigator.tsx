/* eslint-disable react/display-name */
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStackNavigator from "./HomeStackNavigator";
import { LocationScreen, PicturesScreen, BookmarkScreen } from "../screens";

import { COLORS } from "../styles";
import { TabBarIcon } from "../components";
import routes from "./routes";

const Tab = createBottomTabNavigator();

const AppTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: COLORS.buttonColor,
          width: "85%",
          alignSelf: "center",
          borderRadius: 10,
          marginBottom: 10,
          marginTop: 10,
        },
        showLabel: false,
      }}>
      <Tab.Screen
        name={routes.HOME}
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="compass-outline" active={focused} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.LOCATION}
        component={LocationScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="location-outline" active={focused} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.PICTURES}
        component={PicturesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="camera-outline" active={focused} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.BOOKMARK}
        component={BookmarkScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="bookmark-outline" active={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppTabNavigator;
