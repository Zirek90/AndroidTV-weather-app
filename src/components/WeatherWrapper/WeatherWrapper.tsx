import { View, StyleSheet } from "react-native";
import { useCallback, useState } from "react";
import { SingleDayCard } from "../SingleDayCard";
import { MultipleDaysCards } from "../MultipleDaysCards";
import { UpperForm } from "../UpperForm";
import { UseAsyncStorage } from "../../hook";
import { Modal } from "../shared";
import { LanguageSettings } from "../LanguageSettings";
import { SettingsIcon } from "../SettingsIcon";

interface WeatherWrapperProps {
  prepareSplashScreen: () => void;
}

export const WeatherWrapper = (props: WeatherWrapperProps) => {
  const { prepareSplashScreen } = props;
  const { setData } = UseAsyncStorage();
  const [searchedCity, setSearchedCity] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleModal = () => {
    setModalVisible(prev => !prev);
  };

  const handleSearch = useCallback(
    (city: string) => {
      setSearchedCity(city);
      setData("city", city);
    },
    [setData],
  );

  return (
    <>
      <View style={styles.container} onLayout={prepareSplashScreen}>
        <SettingsIcon handleModal={handleModal} />
        <UpperForm handleSearch={handleSearch} />
        <View style={styles.wrapper}>
          <SingleDayCard city={searchedCity} />
          <MultipleDaysCards city={searchedCity} />
        </View>
      </View>
      <Modal modalVisible={modalVisible} handleModal={handleModal}>
        <LanguageSettings />
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  wrapper: {
    flexDirection: "row",
  },
});
