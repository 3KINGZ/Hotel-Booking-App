import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import IIcons from "react-native-vector-icons/Ionicons";
import MIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS, FONTS } from "../../styles";

//Ionicons wifi-outline bed-outline
//MCI fan pool

const icons: { [key: string]: any } = {
  wifi: { name: "wifi-outline", set: "Ionicons" },
  single: { name: "bed-outline", set: "Ionicons" },
  ac: { name: "fan", set: "MaterialCommunityIcons" },
  pool: { name: "pool", set: "MaterialCommunityIcons" },
};

export const Tag = ({ tag }: { tag: Facilitity }) => {
  const { facility } = tag;
  const { name, set } = icons[facility.toLowerCase()];

  return (
    <View style={styles.container}>
      {set === "Ionicons" ? (
        <IIcons name={name} size={scale(16)} color={COLORS.blueTextColor} />
      ) : (
        <MIcons name={name} size={scale(16)} color={COLORS.blueTextColor} />
      )}
      <Text style={styles.tagText}>{facility}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    backgroundColor: COLORS.lightBlue,
    marginRight: 15,
    borderRadius: 10,
  },
  tagText: {
    color: COLORS.blueTextColor,
    marginLeft: 5,
    fontSize: scale(16),
    fontFamily: FONTS.regular,
  },
});
