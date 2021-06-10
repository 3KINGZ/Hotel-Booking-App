/* eslint-disable react/display-name */
import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";

import { DiscoverScreen } from "../screens";
import routes from "./routes";
import IconContainer from "../components/IconContainer";
import { COLORS } from "../styles";

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.DISCOVER}
        component={DiscoverScreen}
        options={{
          headerLeft: () => (
            <View style={{ paddingLeft: 10 }}>
              <IconContainer>
                <Icon name="menu-outline" size={24} />
              </IconContainer>
            </View>
          ),
          headerTitleAlign: "center",
          headerStyle: { elevation: 0, shadowOpacity: 0 },
          headerTintColor: COLORS.buttonColor,
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
