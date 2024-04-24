import { Image, Pressable, StyleSheet } from "react-native";
import React, { useMemo } from "react";
import { availableLanguages } from "../../utils";
import { useTranslation } from "react-i18next";

interface SettingsIconProps {
  handleModal: () => void;
}

export const SettingsIcon = (props: SettingsIconProps) => {
  const { handleModal } = props;
  const { i18n } = useTranslation();
  const detectedLanguage = i18n.language;

  const getFlag = useMemo(() => {
    const flag = availableLanguages.filter(language => language.code === detectedLanguage)[0];
    return flag.image || require("../../assets/flags/en.png");
  }, [detectedLanguage]);

  return (
    <Pressable style={styles.button} onPress={handleModal} onFocus={handleModal}>
      <Image source={getFlag} style={styles.image} />
    </Pressable>
  );
};

export default SettingsIcon;

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    top: 30,
    right: 20,
  },
  image: {
    width: 50,
    height: 30,
  },
});
