import { StyleSheet } from "react-native";
import { useState } from "react";
import { Button } from "../shared";
import { UnitsList } from "../UnitsList";
import { MultipleDaysListResponse, SingleDayResponse } from "../../interface";

interface AdditionalMultipleDaysUnitListProps {
  idx: number;
  item: SingleDayResponse | MultipleDaysListResponse;
}

export const AdditionalMultipleDaysUnitList = (props: AdditionalMultipleDaysUnitListProps) => {
  const { idx, item } = props;
  const [shownIdx, setShownIdx] = useState([]);
  const handleShownIdx = (currentIdx: number) => {
    setShownIdx(prev =>
      prev.includes(currentIdx)
        ? prev.filter(curretItem => curretItem !== currentIdx)
        : [...prev, currentIdx],
    );
  };
  return (
    <>
      <Button
        title={shownIdx.includes(idx) ? "Hide" : "Show more"}
        onPress={() => handleShownIdx(idx)}
        buttonStyles={styles.button}
        textStyles={styles.buttonText}
      />

      {shownIdx.includes(idx) && (
        <UnitsList data={item} withAdditional withTemperature={false} isSmall />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 75,
    height: 25,
  },
  buttonText: {
    fontSize: 12,
  },
});
