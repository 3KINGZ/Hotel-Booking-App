import React, { useState, useRef } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import Icon from "react-native-vector-icons/MaterialIcons";
import IIcon from "react-native-vector-icons/Ionicons";
import StarRating from "react-native-star-rating";

import { hotels } from "../assets/data";
import { Tags, IconContainer, Button } from "../components";
import { COLORS, FONTS } from "../styles";
import { parseRating } from "../utils";
import routes from "../navigation/routes";

export const DetailScreen = ({ route, navigation }: any) => {
  const [numOfLines, setNumOfLines] = useState<number>(2);

  const hotel: IHotel = hotels.find(
    (hotel: IHotel) => hotel.id === route.params.id,
  );

  const { id, name, image, location, rating, facilities, price, description } =
    hotel;

  let scrollView: any = useRef();

  return (
    <ScrollView style={styles.container} ref={scrollView}>
      <View style={styles.imageContainer}>
        <View style={{ flex: 1, elevation: 0, zIndex: 0, width: "100%" }}>
          <Image style={styles.image} source={image} />
        </View>
        <View style={styles.backBTNContainer}>
          <IconContainer
            onPress={() => navigation.goBack()}
            style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
            <Icon
              name="keyboard-arrow-left"
              size={scale(22)}
              color={COLORS.grey}
            />
          </IconContainer>
        </View>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.detailHeaderText}>Facility</Text>
        <Tags tags={facilities} />

        <Text style={styles.detailHeaderText}>{name}</Text>

        <View style={styles.metaDataContainer}>
          <View>
            <View style={styles.locationContainer}>
              <IIcon
                name="location-outline"
                size={scale(16)}
                color={COLORS.grey2}
              />
              <Text style={styles.locationText}>{location}</Text>
            </View>

            <StarRating
              starSize={18}
              disabled={false}
              maxStars={5}
              rating={parseRating(rating)}
              fullStarColor="#fc942f"
              emptyStarColor="grey"
              containerStyle={{ marginVertical: 5 }}
            />
          </View>

          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>{price}</Text>
            <Text style={styles.priceTextSubtitle}>Per night</Text>
          </View>
        </View>

        <View>
          <Text style={styles.description} numberOfLines={numOfLines}>
            {description}
          </Text>

          <TouchableOpacity
            onPress={
              numOfLines === 2
                ? () => {
                    scrollView.current.scrollToEnd({ animated: true });
                    setNumOfLines(0);
                  }
                : () => setNumOfLines(2)
            }>
            <Text style={styles.expandBTN}>
              {numOfLines === 2 ? "Read more" : "Read Less"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Button
        title="Book Hotel"
        size="md"
        onPress={() => navigation.navigate(routes.TICKET, { id })}
        style={{
          containerStyle: { alignSelf: "center" },
          textStyle: { fontFamily: FONTS.bold, fontSize: scale(20) },
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingHorizontal: 15,
  },
  imageContainer: {
    width: "100%",
    height: scale(345),
    top: 0,
    alignSelf: "center",
    borderRadius: 15,
    overflow: "hidden",
    shadowColor: "rgba(0,0,0,0.8)",
    elevation: 10,
    shadowOpacity: 5.0,
    marginVertical: 7,
    shadowRadius: 2,
  },
  image: {
    flex: 1,
    width: "100%",
    marginVertical: verticalScale(10),
    borderRadius: 15,
  },
  backBTNContainer: {
    flex: 1,
    elevation: 1,
    zIndex: 1,
    position: "absolute",
    padding: 20,
  },
  detailContainer: {
    marginTop: scale(10),
  },
  detailHeaderText: {
    fontFamily: FONTS.regular,
    fontSize: scale(24),
    color: COLORS.brownTextColor2,
  },
  metaDataContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: verticalScale(5),
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
  },
  priceContainer: {
    padding: 15,
    backgroundColor: COLORS.lightBlue,
    borderRadius: 15,
    alignItems: "center",
  },
  priceText: {
    fontSize: scale(17),
    color: COLORS.blueTextColor,
    marginVertical: 2,
    fontFamily: FONTS.bold,
  },
  priceTextSubtitle: {
    fontSize: scale(14),
    color: "#c8dfe4",
    marginVertical: 2,
    fontFamily: FONTS.regular,
  },
  description: {
    lineHeight: 20,
    fontSize: scale(16),
    color: COLORS.greyTextColor,
    fontFamily: FONTS.regular,
  },
  expandBTN: {
    color: "gold",
    fontWeight: "bold",
    fontSize: scale(16),
    marginTop: 5,
    textDecorationLine: "underline",
  },
});
