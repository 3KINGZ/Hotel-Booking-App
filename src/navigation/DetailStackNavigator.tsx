/* eslint-disable react/display-name */
import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/MaterialIcons";
import { scale } from "react-native-size-matters";

import { DetailScreen, TicketScreen } from "../screens";
import { IconContainer } from "../components";
import { COLORS, FONTS } from "../styles";
import routes from "./routes";

const Stack = createStackNavigator();

const DetailStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name={routes.DETAIL}
        component={DetailScreen}
      />
      <Stack.Screen
        name={routes.TICKET}
        component={TicketScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <View style={{ paddingLeft: 15 }}>
              <IconContainer
                onPress={() => navigation.goBack()}
                style={{ backgroundColor: "white" }}>
                <Icon
                  name="keyboard-arrow-left"
                  size={scale(22)}
                  color={COLORS.greyTextColor}
                />
              </IconContainer>
            </View>
          ),
          headerTitleAlign: "center",
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            backgroundColor: COLORS.ticketScreenBG,
          },
          headerTintColor: COLORS.buttonColor,
          headerTitleStyle: { fontFamily: FONTS.medium },
        })}
      />
    </Stack.Navigator>
  );
};

export default DetailStackNavigator;
