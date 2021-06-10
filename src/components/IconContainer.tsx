import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../styles";

export default function IconContainer({ children }: { children: Element }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.grey,
    borderRadius: 10,
    padding: 10,
  },
});
