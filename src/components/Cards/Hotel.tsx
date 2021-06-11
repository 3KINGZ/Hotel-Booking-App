import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import Icon from "react-native-vector-icons/Ionicons";

import { COLORS } from "../../styles";

export const Hotel = ({
  hotel,
  active,
}: {
  hotel: IHotel;
  active?: boolean;
}) => {
  const { name, image, location, price } = hotel;

  return (
    <TouchableOpacity
      style={active ? styles.containerActive : styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.detailContainer}>
        <View style={styles.namePriceContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>
            <Text style={styles.mainPrice}>{price}</Text> /Day
          </Text>
        </View>
        <View style={styles.locationContainer}>
          <Icon name="location-outline" size={scale(14)} color={COLORS.grey2} />
          <Text style={styles.locationText}>{location}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: verticalScale(10),
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 10,
    borderRadius: 15,
    backgroundColor: COLORS.grey,
  },
  containerActive: {
    marginVertical: verticalScale(10),
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#f4f8fb",
  },
  image: {
    width: scale(60),
    height: scale(60),
    borderRadius: 15,
    marginRight: 15,
  },
  detailContainer: { flex: 1 },
  namePriceContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    color: COLORS.buttonColor,
    fontSize: scale(18),
    fontWeight: "bold",
  },
  price: {
    fontSize: scale(15),
    color: COLORS.greyTextColor,
  },
  mainPrice: {
    color: COLORS.blueTextColor,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  locationText: {
    marginLeft: 5,
    fontSize: scale(14),
    color: COLORS.grey2,
  },
});
