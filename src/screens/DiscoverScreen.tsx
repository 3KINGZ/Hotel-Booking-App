import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import { SearchBar, Banner, ListHeader, Hotels } from "../components";
import { hotels } from "../assets/data";

export const DiscoverScreen = () => {
  const [filterHotels, setFilterHotels] = useState<IHotel[]>(hotels);
  const [search, setSearch] = useState("");

  const filterHotel = (searchTerm: string) => {
    setSearch(searchTerm);

    setFilterHotels(
      !searchTerm
        ? hotels
        : hotels.filter((hotel: IHotel) => hotel.location.includes(searchTerm)),
    );
  };

  return (
    <View style={styles.container}>
      <SearchBar onChange={filterHotel} />
      {!search && <Banner />}
      <ListHeader />
      <Hotels data={filterHotels} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingHorizontal: 15,
  },
});
