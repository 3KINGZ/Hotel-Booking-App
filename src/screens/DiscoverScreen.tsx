import React from "react";
import { View, StyleSheet } from "react-native";

import { SearchBar, Banner, Hotels } from "../components";

export const DiscoverScreen = () => {
  return (
    <View style={styles.container}>
      <SearchBar />
      <Banner />
      <Hotels />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingHorizontal: 10,
  },
});
