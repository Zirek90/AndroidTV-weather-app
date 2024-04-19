import { View, Text, StyleSheet, Dimensions, ActivityIndicator, Image } from "react-native";
import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { getFutureWeather } from "../../api";
import { getDateOfTheWeek, filterFirstRecordOfDay, capitalize, getDate } from "../../utils";
import { BlurView } from "expo-blur";
import { AdditionalMultipleDaysUnitList } from "../AdditinalMultipleDaysUnitList";
import { MultipleDaysCard } from "../MultipleDaysCard";

const { height, width } = Dimensions.get("screen");

interface MultipleDaysCardProps {
  city: string;
}

export const MultipleDaysCards = (props: MultipleDaysCardProps) => {
  const { city } = props;
  const { data, isLoading, isError } = useQuery({
    queryKey: ["futureWather", city],
    queryFn: () => getFutureWeather(city),
  });

  const filteredData = useMemo(() => {
    if (!data || data?.cod === 404) {
      return null;
    }

    return filterFirstRecordOfDay(data);
  }, [data]);

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
          <MultipleDaysCard key={item.dt} item={item} idx={idx} />
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
    alignItems: "center",
    marginTop: width * 0.15,
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
});
