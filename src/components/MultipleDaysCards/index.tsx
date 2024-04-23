import { View, Text, StyleSheet, Dimensions, ActivityIndicator } from "react-native";
import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { getFutureWeather } from "../../api";
import { filterFirstRecordOfDay, capitalize } from "../../utils";
import { BlurView } from "expo-blur";
import { MultipleDaysCard } from "../MultipleDaysCard";
import { ErrorMessage } from "../ErrorMessage";
import { useTranslation } from "react-i18next";

const { height, width } = Dimensions.get("screen");

interface MultipleDaysCardProps {
  city: string;
}

export const MultipleDaysCards = (props: MultipleDaysCardProps) => {
  const { city } = props;
  const { t } = useTranslation();
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

  if (isError || !data || data?.cod === 404) {
    return <ErrorMessage msg={data?.message || t("errors.updateAlertError")} />;
  }

  return (
    <View style={styles.container}>
      <BlurView
        intensity={10}
        style={styles.blurView}
        tint="dark"
        experimentalBlurMethod="dimezisBlurView">
        <Text style={styles.header}>{capitalize(city)}</Text>
        <View style={styles.blueViewWrapper}>
          {filteredData.map((item, idx) => (
            <MultipleDaysCard key={item.dt} item={item} idx={idx} />
          ))}
        </View>
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.6,
    height,
    marginTop: 50,
    marginLeft: -10,
  },
  header: {
    color: "#fff",
    fontSize: 30,
    padding: 10,
    textAlign: "center",
  },
  blurView: {
    borderRadius: 25,
    overflow: "hidden",
  },
  blueViewWrapper: {
    flexDirection: "row",
  },
});
