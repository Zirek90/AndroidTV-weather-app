import { View, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { SingleDayCard } from "../SingleDayCard";
import { MultipleDaysCard } from "../MultipleDaysCard";
import { Button } from "../shared";

export const WeatherWrapper = () => {
  const [city, setCity] = useState("Kraków");
  const [searchedCity, setSearchedCity] = useState(city);

  const handleCity = (c: string) => {
    setCity(c);
  };
  const handleSearch = () => {
    setSearchedCity(city);
  };
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput style={styles.input} onChangeText={handleCity} value={city} />
        <Button disabled={city.length < 3} title="Search city" onPress={handleSearch} />
      </View>
      <SingleDayCard city={searchedCity} />
      <MultipleDaysCard />
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
