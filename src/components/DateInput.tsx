import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MIcon from "react-native-vector-icons/MaterialIcons";

import { COLORS } from "../styles";

export const DateInput = () => {
  return (
    <View style={styles.container}>
      <MIcon name="calendar-today" color={COLORS.blueTextColor} />
      <Text style={styles.date}>06/03/2021</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.lightBlue,
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  date: { marginLeft: 5, color: COLORS.grey2 },
});
