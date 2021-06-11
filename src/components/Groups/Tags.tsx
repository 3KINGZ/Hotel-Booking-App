import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { verticalScale } from "react-native-size-matters";

import { Tag } from "../Cards";

export const Tags = ({ tags }: { tags: Facilitity[] }) => {
  return (
    <FlatList
      data={tags}
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <Tag tag={item} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: verticalScale(10),
  },
});
