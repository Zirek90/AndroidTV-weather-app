import { View } from "react-native";
import { UnitItem } from "../UnitItem";
import { MultipleDaysListResponse, SingleDayResponse } from "../../interface";
import { useTranslation } from "react-i18next";

interface UnitsListProps {
  data: SingleDayResponse | MultipleDaysListResponse;
  withTemperature?: boolean;
  withAdditional?: boolean;
  isSmall?: boolean;
}

export const UnitsList = (props: UnitsListProps) => {
  const { t } = useTranslation();
  const { data, withAdditional, withTemperature = true, isSmall } = props;
  return (
    <View>
      {withTemperature && (
        <UnitItem
          property={t("units.temperature")}
          value={data.main.temp}
          unit="°C"
          isSmall={isSmall}
        />
      )}
      <UnitItem
        property={t("units.feels_like")}
        value={data.main.feels_like}
        unit="°C"
        isSmall={isSmall}
      />
      <UnitItem
        property={t("units.minimal")}
        value={data.main.temp_min}
        unit="°C"
        isSmall={isSmall}
      />
      <UnitItem
        property={t("units.maximum")}
        value={data.main.temp_max}
        unit="°C"
        isSmall={isSmall}
      />
      <UnitItem
        property={t("units.pressure")}
        value={data.main.pressure}
        unit="Pa"
        isSmall={isSmall}
      />
      <UnitItem
        property={t("units.humidity")}
        value={data.main.humidity}
        unit="g/m3"
        isSmall={isSmall}
      />
      {withAdditional && (
        <>
          <UnitItem property={t("units.wind")} value={data.wind.speed} unit="mph" isSmall />
          <UnitItem property={t("units.clouds")} value={data.clouds.all} unit="%" isSmall />
        </>
      )}
    </View>
  );
};
