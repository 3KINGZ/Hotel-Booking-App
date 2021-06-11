import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { scale, verticalScale } from "react-native-size-matters";

import { COLORS } from "../styles";

export const ListHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hotels</Text>
      <View style={styles.dropDownContainer}>
        <Text style={styles.dropDownText}>Nearest</Text>
        <Icon
          name="keyboard-arrow-down"
          size={scale(16)}
          color={COLORS.greyTextColor}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "95%",
    alignSelf: "center",
    marginTop: verticalScale(5),
  },
  title: {
    color: COLORS.brownTextColor,
    fontSize: scale(24),
  },
  dropDownContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.lightBlue,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  dropDownText: { color: "#909396", fontSize: scale(16), marginRight: 5 },
});
