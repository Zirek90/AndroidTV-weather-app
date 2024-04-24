import { StyleSheet } from "react-native";
import { useState } from "react";
import { Button, UnitsList } from "../../../shared";
import { MultipleDaysListResponse, SingleDayResponse } from "../../../../interface";
import { useTranslation } from "react-i18next";

interface AdditionalMultipleDaysUnitListProps {
  idx: number;
  item: SingleDayResponse | MultipleDaysListResponse;
}

export const AdditionalMultipleDaysUnitList = (props: AdditionalMultipleDaysUnitListProps) => {
  const { idx, item } = props;
  const { t } = useTranslation();
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
        title={
          shownIdx.includes(idx) ? t("buttons.toggleHideButton") : t("buttons.toggleShowButton")
        }
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
    width: 85,
    height: 35,
  },
  buttonText: {
    fontSize: 12,
  },
});
