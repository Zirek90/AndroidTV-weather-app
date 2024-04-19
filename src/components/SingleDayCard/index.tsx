import { View, Text, StyleSheet, Dimensions, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { BlurView } from "expo-blur";
import { useQuery } from "@tanstack/react-query";
import { getCurrentWeather } from "../../api";
import { UnitItem } from "../UnitItem";
import { SingleDayHeader } from "../SingleDayHeader";
import { Button } from "../shared";
import { useBackgroundContext } from "../../context";
import { UnitsList } from "../UnitsList";
import { AdditionalUnitsList } from "../AdditionalUnitsList";

const { height, width } = Dimensions.get("screen");

interface SingleDayCardProps {
  city: string;
}

export const SingleDayCard = (props: SingleDayCardProps) => {
  const { city } = props;
  const { data, isLoading, isError } = useQuery({
    queryKey: ["currentWeather", city],
    queryFn: () => getCurrentWeather(city),
    enabled: city?.length > 3,
  });
  const { handleWeatherChange } = useBackgroundContext();

  useEffect(() => {
    if (!data || data?.cod == 404) {
      return;
    }

    handleWeatherChange(data.weather[0].main);
  }, [data, handleWeatherChange]);

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
      <BlurView
        intensity={10}
        style={[styles.blurView, styles.wrapper]}
        tint="dark"
        experimentalBlurMethod="dimezisBlurView"
      >
        <SingleDayHeader icon={data.weather[0].icon} description={data.weather[0].main} city={data.name} />
        <UnitsList data={data} />
        <AdditionalUnitsList data={data} />
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.4,
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
