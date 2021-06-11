import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { COLORS } from "../styles";

interface IIconContainer {
  children: Element;
  style?: object;
  onPress?: any;
}

export const IconContainer = ({ children, style, onPress }: IIconContainer) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.grey,
    borderRadius: 10,
    padding: 10,
    opacity: 3,
  },
});
