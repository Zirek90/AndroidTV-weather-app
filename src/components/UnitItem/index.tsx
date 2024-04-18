import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface UnitItemProps {
  property: string;
  value: number;
  unit?: string;
}

export const UnitItem = (props: UnitItemProps) => {
  const { property, value, unit } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{property}:</Text>
      <Text style={styles.text}>
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
  },
});
