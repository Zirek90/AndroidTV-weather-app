import { View, TextInput, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { Button } from "../shared";
import { UseAsyncStorage } from "../../hook";

interface UpperFormProps {
  handleSearch: (city: string) => void;
}

export const UpperForm = (props: UpperFormProps) => {
  const { storedCity } = UseAsyncStorage();
  const { handleSearch } = props;
  const [city, setCity] = useState("");

  useEffect(() => {
    setCity(storedCity);
    handleSearch(storedCity);
  }, [handleSearch, storedCity]);

  const handleCity = (c: string) => {
    setCity(c);
  };

  return (
    <View style={styles.form}>
      <TextInput style={styles.input} onChangeText={handleCity} value={city} />
      <Button disabled={city.length < 3} title="Search city" onPress={() => handleSearch(city)} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    alignItems: "center",
    top: 20,
    borderWidth: 1,
    borderColor: "#fff",
    borderStyle: "dashed",
    padding: 5,
    borderRadius: 10,
    backgroundColor: "rgba(0, 0, 0, .4)",
  },
  input: {
    height: 35,
    marginRight: 10,
    borderWidth: 1,
    width: 200,
    backgroundColor: "rgba(256, 256, 256, .8)",
    borderRadius: 10,
    borderColor: "#fff",
    color: "#000",
    textAlign: "center",
    zIndex: 99,
    fontWeight: "700",
  },
});
