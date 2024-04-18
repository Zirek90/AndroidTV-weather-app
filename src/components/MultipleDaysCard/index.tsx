import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";

const { height, width } = Dimensions.get("screen");

export const MultipleDaysCard = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={{ color: "#fff" }}>Component two</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: width / 2,
    height: height,
    justifyContent: "center",
    alignItems: "center",
  },
});
