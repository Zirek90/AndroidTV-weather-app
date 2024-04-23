import { View } from "react-native";
import { useState } from "react";
import { UnitItem } from "../UnitItem";
import { Button } from "../shared";
import { SingleDayResponse } from "../../interface";
import { useTranslation } from "react-i18next";

interface AdditionalUnitsListProps {
  data: SingleDayResponse;
}

export const AdditionalSingleDayUnitsList = (props: AdditionalUnitsListProps) => {
  const { data } = props;
  const { t } = useTranslation();
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(prev => !prev);
  };

  return (
    <>
      {showMore && (
        <View>
          <UnitItem property={t("units.wind")} value={data.wind.speed} unit="mph" />
          <UnitItem property={t("units.clouds")} value={data.clouds.all} unit="%" />
        </View>
      )}
      <Button
        title={showMore ? t("buttons.toggleHideButton") : t("buttons.toggleShowButton")}
        onPress={toggleShowMore}
      />
    </>
  );
};
