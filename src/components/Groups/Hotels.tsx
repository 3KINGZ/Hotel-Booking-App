import React from "react";
import { View, Text, FlatList } from "react-native";
import { scale } from "react-native-size-matters";
import Icon from "react-native-vector-icons/MaterialIcons";
import { COLORS } from "../../styles";
import { Hotel } from "../Cards";

const Header = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
      <Text style={{ color: COLORS.brownTextColor, fontSize: scale(24) }}>
        Hotels
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: COLORS.lightBlue,
          padding: 5,
          borderRadius: 15,
        }}>
        <Text style={{ color: "#909396", fontSize: scale(16), marginRight: 5 }}>
          Nearest
        </Text>
        <Icon
          name="keyboard-arrow-down"
          size={scale(16)}
          color={COLORS.greyTextColor}
        />
      </View>
    </View>
  );
};

export const Hotels = ({ data }: { data: IHotel[] }) => {
  return (
    <FlatList
      style={{ width: "95%", alignSelf: "center" }}
      data={data}
      renderItem={({ item }) => <Hotel hotel={item} />}
    />
  );
};
