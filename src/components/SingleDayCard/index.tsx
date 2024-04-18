import { View, Text, StyleSheet, Dimensions, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { BlurView } from "expo-blur";
import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../../api";
import { UnitItem } from "../UnitItem";
import { SingleDayHeader } from "../SingleDayHeader";
import { Button } from "../shared";
import { useBackgroundContext } from "../../context";

const { height, width } = Dimensions.get("screen");

interface SingleDayCardProps {
  city: string;
}

export const SingleDayCard = (props: SingleDayCardProps) => {
  const { city } = props;
  const { data, isLoading, isError } = useQuery({
    queryKey: ["weather", city],
    queryFn: () => getWeather(city),
    enabled: city?.length > 3,
  });
  const [showMore, setShowMore] = useState(false);
  const { handleWeatherChange } = useBackgroundContext();

  useEffect(() => {
    if (!data || data?.cod == 404) {
      return;
    }

    handleWeatherChange(data.weather[0].main);
  }, [data, handleWeatherChange]);

  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  if (isError || !data || data?.cod == 404) {
    return (
      <View style={styles.container}>
        <Text>Cannot fetch weather for the given city</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <BlurView intensity={10} style={styles.blurView} tint="dark" experimentalBlurMethod="dimezisBlurView">
        <View style={styles.wrapper}>
          <SingleDayHeader icon={data.weather[0].icon} description={data.weather[0].main} city={data.name} />

          <View>
            <UnitItem property="Temperature" value={data.main.temp} unit="°C" />
            <UnitItem property="Feels like" value={data.main.feels_like} unit="°C" />
            <UnitItem property="Minimal" value={data.main.temp_min} unit="°C" />
            <UnitItem property="Maximum" value={data.main.temp_max} unit="°C" />
            <UnitItem property="Pressure" value={data.main.pressure} unit="Pa" />
            <UnitItem property="Humidity" value={data.main.humidity} unit="g/m3" />
          </View>

          {showMore && (
            <View>
              <UnitItem property="Wind" value={data.wind.speed} unit="mph" />
              <UnitItem property="Clouds" value={data.clouds.all} unit="%" />
            </View>
          )}
          <Button title={showMore ? "Show more" : "Hide"} onPress={toggleShowMore} />
        </View>
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width / 2,
    height: height,
    justifyContent: "center",
    alignItems: "center",
  },
  blurView: {
    borderRadius: 25,
    overflow: "hidden",
  },
  wrapper: {
    width: 300,
    height: 375,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  icon: {
    width: 75,
    height: 75,
    alignSelf: "center",
  },
});
