import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { scale, verticalScale } from "react-native-size-matters";

import { COLORS } from "../styles";

export const ListHeader = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "95%",
        alignSelf: "center",
        marginTop: verticalScale(5),
      }}>
      <Text style={{ color: COLORS.brownTextColor, fontSize: scale(24) }}>
        Hotels
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: COLORS.lightBlue,
          padding: 5,
          borderRadius: 15,
        }}>
        <Text style={{ color: "#909396", fontSize: scale(16), marginRight: 5 }}>
          Nearest
        </Text>
        <Icon
          name="keyboard-arrow-down"
          size={scale(16)}
          color={COLORS.greyTextColor}
        />
      </View>
    </View>
  );
};
