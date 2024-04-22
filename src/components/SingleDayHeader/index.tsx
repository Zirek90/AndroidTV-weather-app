import { View, Text, StyleSheet, Image } from "react-native";

interface SingleDayHeaderProps {
  icon: string;
  description: string;
  city: string;
}

export const SingleDayHeader = (props: SingleDayHeaderProps) => {
  const { icon, description, city } = props;
  return (
    <View style={styles.container}>
      <Image
        style={styles.icon}
        source={{ uri: `${process.env.EXPO_PUBLIC_ICON_URL}${icon}.png` }}
      />
      <Text style={{ color: "#fff", fontSize: 20 }}>{description || ""}</Text>
      <Text style={{ color: "#fff", fontSize: 24 }}>{city}</Text>
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
});
