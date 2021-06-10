/* eslint-disable react/display-name */
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStackNavigator from "./HomeStackNavigator";
import { LocationScreen, PicturesScreen, BookmarkScreen } from "../screens";

import { COLORS } from "../styles";
import { TabBarIcon } from "../components/TabBarIcon";

const Tab = createBottomTabNavigator();

const AppTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: COLORS.buttonColor,
          width: "80%",
          alignSelf: "center",
          borderRadius: 10,
          marginBottom: 20,
        },
        showLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="compass-outline" active={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={LocationScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="location-outline" active={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Pictures"
        component={PicturesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="camera-outline" active={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Bookmark"
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
