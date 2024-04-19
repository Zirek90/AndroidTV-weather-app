import { View } from "react-native";
import { UnitItem } from "../UnitItem";

interface UnitsListProps {
  data: any;
  withTemperature?: boolean;
  withAdditional?: boolean;
  isSmall?: boolean;
}

export const UnitsList = (props: UnitsListProps) => {
  const { data, withAdditional, withTemperature = true, isSmall } = props;
  return (
    <View>
      {withTemperature && <UnitItem property="Temperature" value={data.main.temp} unit="°C" isSmall={isSmall} />}
      <UnitItem property="Feels like" value={data.main.feels_like} unit="°C" isSmall={isSmall} />
      <UnitItem property="Minimal" value={data.main.temp_min} unit="°C" isSmall={isSmall} />
      <UnitItem property="Maximum" value={data.main.temp_max} unit="°C" isSmall={isSmall} />
      <UnitItem property="Pressure" value={data.main.pressure} unit="Pa" isSmall={isSmall} />
      <UnitItem property="Humidity" value={data.main.humidity} unit="g/m3" isSmall={isSmall} />
      {withAdditional && (
        <>
          <UnitItem property="Wind" value={data.wind.speed} unit="mph" isSmall />
          <UnitItem property="Clouds" value={data.clouds.all} unit="%" isSmall />
        </>
      )}
    </View>
  );
};
