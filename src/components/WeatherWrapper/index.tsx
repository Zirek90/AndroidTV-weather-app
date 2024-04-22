import { View, StyleSheet } from "react-native";
import { useCallback, useState } from "react";
import { SingleDayCard } from "../SingleDayCard";
import { MultipleDaysCards } from "../MultipleDaysCards";
import { UpperForm } from "../UpperForm";
import { UseAsyncStorage } from "../../hook";

interface WeatherWrapperProps {
  prepareSplashScreen: () => void;
}

export const WeatherWrapper = (props: WeatherWrapperProps) => {
  const { prepareSplashScreen } = props;
  const { setData } = UseAsyncStorage();
  const [searchedCity, setSearchedCity] = useState("");

  const handleSearch = useCallback(
    (city: string) => {
      setSearchedCity(city);
      setData(city);
    },
    [setData],
  );

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
