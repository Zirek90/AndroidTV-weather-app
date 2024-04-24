import { LanguageEnum } from "../enum";
import i18n from "../i18n";

export const availableLanguages = [
  {
    code: LanguageEnum.EN,
    name: i18n.t("languages.languageList.english"),
    image: require("../assets/flags/en.png"),
  },
  {
    code: LanguageEnum.PL,
    name: i18n.t("languages.languageList.polish"),
    image: require("../assets/flags/pl.png"),
  },
  {
    code: LanguageEnum.ID,
    name: i18n.t("languages.languageList.indonesian"),
    image: require("../assets/flags/id.png"),
  },
];
