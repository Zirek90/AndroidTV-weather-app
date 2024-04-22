import { View } from "react-native";
import { useState } from "react";
import { UnitItem } from "../UnitItem";
import { Button } from "../shared";
import { SingleDayResponse } from "../../interface";

interface AdditionalUnitsListProps {
  data: SingleDayResponse;
}

export const AdditionalSingleDayUnitsList = (props: AdditionalUnitsListProps) => {
  const { data } = props;
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(prev => !prev);
  };

  return (
    <>
      {showMore && (
        <View>
          <UnitItem property="Wind" value={data.wind.speed} unit="mph" />
          <UnitItem property="Clouds" value={data.clouds.all} unit="%" />
        </View>
      )}
      <Button title={showMore ? "Hide" : "Show more"} onPress={toggleShowMore} />
    </>
  );
};
