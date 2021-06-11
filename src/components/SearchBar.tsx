import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

import { COLORS } from "../styles";

export const SearchBar = ({ value, onChange }: any) => {
  return (
    <View style={styles.container}>
      <Icon name="search1" size={18} color={COLORS.buttonColor} />
      <TextInput
        onChangeText={text => onChange(text)}
        style={styles.input}
        placeholder="Search destinations"
        placeholderTextColor={COLORS.buttonColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.grey,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  input: {
    height: "100%",
    flex: 1,
    fontSize: 16,
    marginLeft: 20,
    color: COLORS.buttonColor,
  },
});
