import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import plTranslations from "./translations/pl.json";
import enTranslations from "./translations/en.json";
import idTranslations from "./translations/id.json";
import { LanguageEnum } from "../enum";

export const translations = {
  pl: { translation: plTranslations },
  en: { translation: enTranslations },
  id: { translation: idTranslations },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  lng: LanguageEnum.EN,
  fallbackLng: LanguageEnum.EN,
  resources: translations,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
