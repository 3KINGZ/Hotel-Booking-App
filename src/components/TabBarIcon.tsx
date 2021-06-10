import React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { COLORS } from "../styles";

interface ITabBarIcon {
  name: string;
  active: boolean;
}

export const TabBarIcon = ({ name, active }: ITabBarIcon) => {
  return (
    <View style={active ? styles.active : null}>
      <Icon name={name} size={24} color={active ? COLORS.grey : COLORS.grey2} />
    </View>
  );
};

const styles = StyleSheet.create({
  active: {
    backgroundColor: COLORS.buttonColorActive,
    padding: 5,
    borderRadius: 10,
  },
});
