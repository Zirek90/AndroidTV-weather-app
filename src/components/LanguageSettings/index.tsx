import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { LanguageEnum } from "../../enum";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import { availableLanguages } from "../../utils";

export const LanguageSettings = () => {
  const { t } = useTranslation();

  const handleLanguageChange = (code: LanguageEnum) => {
    i18n.changeLanguage(code);
  };
  return (
    <View>
      <Text style={[styles.textColor, styles.header]}>{t("languages.header")}</Text>
      {availableLanguages.map(language => (
        <Pressable
          style={styles.wrapper}
          key={language.code}
          onPress={() => handleLanguageChange(language.code)}
          onFocus={() => handleLanguageChange(language.code)}>
          <Image style={styles.image} source={language.image} />
          <Text style={[styles.textColor, styles.textFont]}>{language.name}</Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  textColor: {
    color: "#fff",
  },
  header: {
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
  },
  image: {
    width: 50,
    height: 30,
  },
  wrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 5,
    backgroundColor: "rgba(256, 256, 256, 0.1)",
    padding: 5,
    borderRadius: 15,
  },
  textFont: {
    fontSize: 25,
  },
});
