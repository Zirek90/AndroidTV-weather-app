import { StyleSheet, View } from "react-native";
import { AdditionalMultipleDaysUnitList } from "../AdditinalMultipleDaysUnitList";
import { MultipleDaysHeader } from "../MultipleDaysHeader";
import { MultipleDaysListResponse } from "../../interface";

interface MultipleDaysCardProps {
  item: MultipleDaysListResponse;
  idx: number;
}

export const MultipleDaysCard = (props: MultipleDaysCardProps) => {
  const { idx, item } = props;
  return (
    <View style={styles.container}>
      <MultipleDaysHeader item={item} />
      <AdditionalMultipleDaysUnitList idx={idx} item={item} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 90,
    margin: 10,
    alignItems: "center",
  },
});
