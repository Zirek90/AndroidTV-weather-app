import { View, Text, StyleSheet, Image } from "react-native";
import { getDate, getDateOfTheWeek } from "../../utils";

interface SingleDayHeaderProps {
  icon: string;
  description: string;
  city: string;
}

export const SingleDayHeader = (props: SingleDayHeaderProps) => {
  const { icon, description, city } = props;
  return (
    <View style={styles.container}>
      <Text style={[styles.textColor, { fontSize: 15 }]}>{getDateOfTheWeek()}</Text>
      <Text style={[styles.textColor, { fontSize: 13 }]}>{getDate()}</Text>
      <Image
        style={styles.icon}
        source={{ uri: `${process.env.EXPO_PUBLIC_ICON_URL}${icon}.png` }}
      />
      <Text style={[styles.textColor, { fontSize: 18 }]}>{description || ""}</Text>
      <Text style={[styles.textColor, { fontSize: 23 }]}>{city}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  icon: {
    width: 75,
    height: 75,
    alignSelf: "center",
  },
  textColor: {
    color: "#fff",
  },
});
