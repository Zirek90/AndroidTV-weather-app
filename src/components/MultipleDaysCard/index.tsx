import { View, Text, StyleSheet, Dimensions, ActivityIndicator, Image } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getFutureWeather } from "../../api";
import { getDateOfTheWeek, filterFirstRecordOfDay, capitalize, getDate } from "../../utils";
import { UnitItem } from "../UnitItem";
import { BlurView } from "expo-blur";
import { Button } from "../shared";

const { height, width } = Dimensions.get("screen");

interface MultipleDaysCardProps {
  city: string;
}

export const MultipleDaysCard = (props: MultipleDaysCardProps) => {
  const { city } = props;
  const { data, isLoading, isError } = useQuery({
    queryKey: ["futureWather", city],
    queryFn: () => getFutureWeather(city),
  });
  const [shownIdx, setShownIdx] = useState([]);

  const filteredData = useMemo(() => {
    if (!data || data?.cod === 404) {
      return null;
    }

    return filterFirstRecordOfDay(data);
  }, [data]);

  const handleShownIdx = (idx: number) => {
    setShownIdx((prev) => (prev.includes(idx) ? prev.filter((item) => item !== idx) : [...prev, idx]));
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
    <View style={styles.wrapper}>
      <Text style={styles.header}>{capitalize(city)}</Text>
      <BlurView intensity={10} style={styles.blurView} tint="dark" experimentalBlurMethod="dimezisBlurView">
        {filteredData.map((item, idx) => (
          <View key={item.dt} style={{ width: 90, margin: 10 }}>
            <View style={{ alignItems: "center" }}>
              <Text style={{ color: "#fff", fontSize: 15 }}>{getDateOfTheWeek(item.dt_txt)}</Text>
              <Text style={{ color: "#fff", fontSize: 13 }}>{getDate(item.dt_txt) || ""}</Text>
              <Image
                style={styles.icon}
                source={{ uri: `${process.env.EXPO_PUBLIC_ICON_URL}${item.weather[0].icon}.png` }}
              />
              <Text style={{ color: "#fff", fontSize: 15, marginBottom: 5 }}>{item.weather[0].main || ""}</Text>

              <Button
                title={shownIdx.includes(idx) ? "Hide" : "Show more"}
                onPress={() => handleShownIdx(idx)}
                buttonStyles={styles.button}
                textStyles={styles.buttonText}
              />

              {shownIdx.includes(idx) && (
                <View>
                  <UnitItem property="Temp" value={item.main.temp} unit="°C" isSmall />
                  <UnitItem property="Feels like" value={item.main.feels_like} unit="°C" isSmall />
                  <UnitItem property="Minimal" value={item.main.temp_min} unit="°C" isSmall />
                  <UnitItem property="Maximum" value={item.main.temp_max} unit="°C" isSmall />
                  <UnitItem property="Pressure" value={item.main.pressure} unit="Pa" isSmall />
                  <UnitItem property="Humidity" value={item.main.humidity} unit="g/m3" isSmall />
                  <UnitItem property="Wind" value={item.wind.speed} unit="mph" isSmall />
                  <UnitItem property="Clouds" value={item.clouds.all} unit="%" isSmall />
                </View>
              )}
            </View>
          </View>
        ))}
      </BlurView>
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
  wrapper: {
    width: width * 0.6,
    height: height,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  header: {
    color: "#fff",
    fontSize: 30,
    padding: 25,
  },
  blurView: {
    borderRadius: 25,
    overflow: "hidden",
    flexDirection: "row",
  },
  icon: {
    width: 40,
    height: 40,
    alignSelf: "center",
  },
  button: {
    width: 75,
    height: 25,
  },
  buttonText: {
    fontSize: 12,
  },
});
