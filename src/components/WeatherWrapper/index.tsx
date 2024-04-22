import { View, StyleSheet } from "react-native";
import { useState } from "react";
import { SingleDayCard } from "../SingleDayCard";
import { MultipleDaysCards } from "../MultipleDaysCards";
import { UpperForm } from "../UpperForm";

interface WeatherWrapperProps {
  prepareSplashScreen: () => void;
}

export const WeatherWrapper = (props: WeatherWrapperProps) => {
  const { prepareSplashScreen } = props;
  const [searchedCity, setSearchedCity] = useState("Kraków");

  const handleSearch = (city: string) => {
    setSearchedCity(city);
  };
  return (
    <View style={styles.container} onLayout={prepareSplashScreen}>
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
