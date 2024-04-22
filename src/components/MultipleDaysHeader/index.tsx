import { Text, Image, StyleSheet } from "react-native";
import { getDate, getDateOfTheWeek } from "../../utils";
import { MultipleDaysListResponse } from "../../interface";

interface MultipleDaysHeaderProps {
  item: MultipleDaysListResponse;
}

export const MultipleDaysHeader = (props: MultipleDaysHeaderProps) => {
  const { item } = props;
  return (
    <>
      <Text style={[styles.textColor, styles.text]}>{getDateOfTheWeek(item.dt_txt)}</Text>
      <Text style={[styles.textColor, styles.smallText]}>{getDate(item.dt_txt)}</Text>
      <Image
        style={styles.icon}
        source={{
          uri: `${process.env.EXPO_PUBLIC_ICON_URL}${item.weather[0].icon}.png`,
        }}
      />
      <Text style={[styles.textColor, styles.smallText]}>{item.main.temp} °C</Text>
      <Text style={[styles.textColor, styles.text, { marginBottom: 5 }]}>
        {item.weather[0].main}
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  textColor: {
    color: "#fff",
  },
  smallText: {
    fontSize: 13,
  },
  text: {
    fontSize: 15,
  },
  icon: {
    width: 40,
    height: 40,
    alignSelf: "center",
  },
});
