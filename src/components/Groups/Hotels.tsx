import React from "react";
import { FlatList, StyleSheet } from "react-native";

import { Hotel } from "../Cards";

export const Hotels = ({ data }: { data: IHotel[] }) => {
  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={({ item }) => <Hotel hotel={item} />}
    />
  );
};

const styles = StyleSheet.create({
  container: { width: "95%", alignSelf: "center" },
});
