import { type translations } from ".";
import { LanguageEnum } from "../enum";

declare module "i18next" {
  interface CustomTypeOptions {
    translations: (typeof translations)[LanguageEnum.PL];
  }
}
