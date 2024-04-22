import { View, StyleSheet, Dimensions, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import { BlurView } from "expo-blur";
import { useQuery } from "@tanstack/react-query";
import { getCurrentWeather } from "../../api";
import { useBackgroundContext } from "../../context";
import { SingleDayHeader } from "../SingleDayHeader";
import { UnitsList } from "../UnitsList";
import { AdditionalSingleDayUnitsList } from "../AdditionalSingleDayUnitsList";
import { ErrorMessage } from "../ErrorMessage";

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
    if (!data || data?.cod === 404) {
      return;
    }

    handleWeatherChange(data.weather[0].main);
  }, [data, handleWeatherChange]);

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  if (isError || !data || data?.cod === 404) {
    return (
      <ErrorMessage
        msg={data.message || "Cannot fetch weather for the given city"}
      />
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
        <SingleDayHeader
          icon={data.weather[0].icon}
          description={data.weather[0].main}
          city={data.name}
        />
        <UnitsList data={data} />
        <AdditionalSingleDayUnitsList data={data} />
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.4,
    height,
    marginTop: 50,
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
