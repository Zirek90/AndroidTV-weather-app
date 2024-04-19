import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SingleDayCard } from "../SingleDayCard";
import { MultipleDaysCard } from "../MultipleDaysCard";
import { UpperForm } from "../UpperForm";

export const WeatherWrapper = () => {
  const [searchedCity, setSearchedCity] = useState("Kraków");

  const handleSearch = (city: string) => {
    setSearchedCity(city);
  };
  return (
    <View style={styles.container}>
      <UpperForm handleSearch={handleSearch} />
      <SingleDayCard city={searchedCity} />
      <MultipleDaysCard city={searchedCity} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  form: {
    flexDirection: "row",
    position: "absolute",
    alignItems: "center",
    top: 20,
    borderWidth: 1,
    borderColor: "#fff",
    borderStyle: "dashed",
    padding: 5,
    borderRadius: 10,
    backgroundColor: "rgba(0, 0, 0, .1)",
  },
  input: {
    height: 35,
    marginRight: 10,
    borderWidth: 1,
    width: 200,
    backgroundColor: "rgba(256, 256, 256, .3)",
    borderRadius: 10,
    borderColor: "#fff",
    color: "#fff",
    textAlign: "center",
    zIndex: 99,
  },
});
