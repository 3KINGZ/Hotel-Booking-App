import React from "react";
import { View, Text, Image, StatusBar, StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import IIcon from "react-native-vector-icons/Ionicons";
import MIcon from "react-native-vector-icons/MaterialIcons";

import { hotels } from "../assets/data";
import { Button, TicketData, DateInput } from "../components";
import routes from "../navigation/routes";
import { COLORS, FONTS } from "../styles";

export const TicketScreen = ({ route, navigation }: any) => {
  const hotel: IHotel = hotels.find(
    (hotel: IHotel) => hotel.id === route.params.id,
  );

  const { name, image, location, rating } = hotel;

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#f4fafc" />
      <View style={styles.container}>
        <View style={styles.ticketContainer}>
          <View style={styles.ticketMainContainer}>
            <View style={styles.ticketMetaDataContainer}>
              <Image source={image} style={styles.image} />
              <View>
                <Text style={styles.name}>{name}</Text>

                <View style={styles.locationContainer}>
                  <IIcon
                    name="location-outline"
                    size={scale(16)}
                    color={COLORS.grey2}
                  />
                  <Text style={styles.locationText}>{location}</Text>
                </View>

                <View style={styles.ratingContainer}>
                  <IIcon name="star" size={scale(16)} color="#fc942f" />
                  <Text style={styles.rating}>{rating}</Text>
                  <Text style={styles.review}>5k reviews</Text>
                </View>
              </View>
            </View>

            <View style={styles.ticketDataContainer}>
              <View>
                <TicketData title="Check-in" subtitle="3 Jun,2021" />
                <TicketData title="Check-out" subtitle="9 Jun,2021" />
              </View>
              <View>
                <TicketData title="Room type" subtitle="Deluxe room" />
                <TicketData title="Capacity" subtitle="Double bed" />
              </View>
            </View>

            <View style={styles.totalPriceContainer}>
              <Text style={styles.priceTitle}>Total price:</Text>
              <Text style={styles.price}>$ 775</Text>
            </View>
          </View>
        </View>

        <View style={styles.rescheduleContainer}>
          <View style={styles.rescheduleHeaderContainer}>
            <Text style={styles.rescheduleHeaderText}>Reschedule</Text>
            <MIcon
              name="keyboard-arrow-down"
              size={scale(22)}
              color={COLORS.brownTextColor}
            />
          </View>

          <View style={styles.ticketDateContainer}>
            <TicketData title="Previous Date" component={<DateInput />} />
            <TicketData title="New Date" component={<DateInput />} />
          </View>

          <Button
            title="Proceed"
            onPress={() => navigation.navigate(routes.APP_TAB)}
            size="md"
            style={{
              containerStyle: { alignSelf: "center" },
              textStyle: { fontSize: scale(20) },
            }}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4fafc",
  },
  ticketContainer: {
    marginHorizontal: 15,
    backgroundColor: "white",
    borderRadius: 15,
  },
  ticketMainContainer: {
    marginVertical: verticalScale(15),
    padding: 30,
    width: "100%",
  },
  ticketMetaDataContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 15,
  },
  image: {
    width: scale(80),
    height: scale(80),
    borderRadius: 15,
    marginRight: 15,
  },
  name: {
    fontSize: scale(18),
    fontFamily: FONTS.medium,
    color: COLORS.brownTextColor,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    marginLeft: 5,
    fontSize: scale(16),
    color: COLORS.grey2,
    marginVertical: 5,
    fontFamily: FONTS.bold,
  },
  ratingContainer: { flexDirection: "row", alignItems: "center" },
  rating: {
    color: COLORS.blueTextColor,
    fontSize: scale(15),
    fontFamily: FONTS.medium,
    marginLeft: 2,
  },
  review: {
    color: COLORS.grey2,
    marginLeft: 10,
    fontSize: scale(15),
    fontFamily: FONTS.regular,
  },
  ticketDataContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  totalPriceContainer: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.lightBlue,
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 10,
  },
  priceTitle: {
    color: COLORS.grey2,
    fontSize: scale(15),
    fontFamily: FONTS.medium,
  },
  price: {
    color: COLORS.blueTextColor,
    fontSize: scale(20),
    fontFamily: FONTS.bold,
  },
  rescheduleContainer: {
    padding: 20,
    backgroundColor: "white",
    marginTop: 20,
    flex: 1,
  },
  rescheduleHeaderContainer: { flexDirection: "row", alignItems: "center" },
  rescheduleHeaderText: {
    fontSize: scale(22),
    marginRight: 4,
    color: COLORS.brownTextColor,
    fontFamily: FONTS.medium,
  },
  ticketDateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
