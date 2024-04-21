import { View, StyleSheet } from "react-native";
import { useState } from "react";
import { SingleDayCard } from "../SingleDayCard";
import { MultipleDaysCards } from "../MultipleDaysCards";
import { UpperForm } from "../UpperForm";

export const WeatherWrapper = () => {
  const [searchedCity, setSearchedCity] = useState("Kraków");

  const handleSearch = (city: string) => {
    setSearchedCity(city);
  };
  return (
    <View style={styles.container}>
      <UpperForm handleSearch={handleSearch} />
      <View style={styles.wrapper}>
        <SingleDayCard city={searchedCity} />
        <MultipleDaysCards city={searchedCity} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  wrapper: {
    flexDirection: "row",
  },
});
