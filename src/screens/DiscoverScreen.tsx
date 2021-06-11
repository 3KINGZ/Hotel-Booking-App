import React from "react";
import { View, StyleSheet } from "react-native";

import { SearchBar, Banner, ListHeader, Hotels } from "../components";
import { hotels } from "../assets/data";

export const DiscoverScreen = () => {
  return (
    <View style={styles.container}>
      <SearchBar />
      <Banner />
      <ListHeader />
      <Hotels data={hotels} />
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
