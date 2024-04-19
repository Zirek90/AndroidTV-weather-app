import { View, Text } from "react-native";
import React, { useState } from "react";
import { UnitItem } from "../UnitItem";
import { Button } from "../shared";

interface AdditionalUnitsListProps {
  data: any;
}

export const AdditionalUnitsList = (props: AdditionalUnitsListProps) => {
  const { data } = props;
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <>
      {showMore && (
        <View>
          <UnitItem property="Wind" value={data.wind.speed} unit="mph" />
          <UnitItem property="Clouds" value={data.clouds.all} unit="%" />
        </View>
      )}
      <Button title={showMore ? "Show more" : "Hide"} onPress={toggleShowMore} />
    </>
  );
};
