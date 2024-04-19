import { View } from "react-native";
import React from "react";
import { UnitItem } from "../UnitItem";

interface UnitsListProps {
  data: any;
}

export const UnitsList = (props: UnitsListProps) => {
  const { data } = props;
  return (
    <View>
      <UnitItem property="Temperature" value={data.main.temp} unit="°C" />
      <UnitItem property="Feels like" value={data.main.feels_like} unit="°C" />
      <UnitItem property="Minimal" value={data.main.temp_min} unit="°C" />
      <UnitItem property="Maximum" value={data.main.temp_max} unit="°C" />
      <UnitItem property="Pressure" value={data.main.pressure} unit="Pa" />
      <UnitItem property="Humidity" value={data.main.humidity} unit="g/m3" />
    </View>
  );
};
