import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

import { COLORS, FONTS } from "../styles";

interface ITicketData {
  title: string;
  subtitle?: string;
  component?: Element;
}

export const TicketData = ({ title, subtitle, component }: ITicketData) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {component ? (
        <>{component}</>
      ) : (
        <Text style={styles.subtitle}>{subtitle}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginVertical: verticalScale(10),
  },
  title: {
    color: COLORS.grey2,
    fontSize: scale(15),
    fontFamily: FONTS.medium,
  },
  subtitle: {
    fontSize: scale(18),
    fontFamily: FONTS.medium,
    color: COLORS.brownTextColor,
  },
});
