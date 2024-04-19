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
  const handleShownIdx = (idx: number) => {
    setShownIdx((prev) => (prev.includes(idx) ? prev.filter((item) => item !== idx) : [...prev, idx]));
  };
  return (
    <>
      <Button
        title={shownIdx.includes(idx) ? "Hide" : "Show more"}
        onPress={() => handleShownIdx(idx)}
        buttonStyles={styles.button}
        textStyles={styles.buttonText}
      />

      {shownIdx.includes(idx) && <UnitsList data={item} withAdditional withTemperature={false} isSmall />}
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
