import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { scale } from "react-native-size-matters";
import Icon from "react-native-vector-icons/AntDesign";
import { COLORS } from "../styles";

export const Banner = () => {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/images/canal-city.jpg")}>
      <View style={styles.innerContainer}>
        <Text style={styles.innerContainerText}>
          Nayhavn Canal{" "}
          <Text style={styles.innerContainerTextHighlight}>City Boat</Text>{" "}
          Travel
        </Text>

        <Text style={styles.innerContainerTextSubtitle}>
          Experience beautiful europe view all across the city with local manual
          boat
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Book Ticket</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonPlain}>
            <View style={styles.buttonPlain}>
              <Icon
                name="playcircleo"
                color="white"
                style={{ marginRight: 5 }}
                size={15}
              />
              <Text style={styles.buttonText}>Book Ticket</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    height: scale(200),
    borderRadius: 15,
    marginVertical: 10,
    overflow: "hidden",
  },
  innerContainer: {
    flex: 1,
    padding: 20,
  },
  innerContainerText: {
    fontSize: scale(24),
    color: "white",
    width: "70%",
  },
  innerContainerTextHighlight: {
    color: "gold",
    fontWeight: "bold",
  },
  innerContainerTextSubtitle: {
    fontSize: scale(16),
    color: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 10,
    left: 20,
    alignItems: "center",
  },
  button: {
    width: scale(100),
    backgroundColor: COLORS.buttonColorActive,
    borderRadius: 10,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 3,
    justifyContent: "center",
  },
  buttonText: {
    fontSize: scale(15),
    color: "white",
    textAlign: "center",
  },
  buttonPlain: {
    width: scale(100),
    borderRadius: 5,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 3,
    justifyContent: "center",
    marginLeft: 15,
  },
});
