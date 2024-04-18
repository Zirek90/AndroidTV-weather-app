import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface UnitItemProps {
  property: string;
  value: number;
  unit?: string;
  isSmall?: boolean;
}

export const UnitItem = (props: UnitItemProps) => {
  const { property, value, unit, isSmall } = props;
  return (
    <View style={[styles.container, isSmall && { width: "100%" }]}>
      <Text style={[styles.text, isSmall && styles.textSmall]}>{property}:</Text>
      <Text style={[styles.text, isSmall && styles.textSmall]}>
        {value} {unit}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
    alignContent: "space-around",
    width: "50%",
  },
  text: {
    color: "#fff",
    paddingTop: 2,
  },
  textSmall: {
    fontSize: 10,
  },
});
