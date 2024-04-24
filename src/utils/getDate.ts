import i18n from "../i18n";

export const getDate = (dateString: string | Date = new Date()) => {
  const language = `${i18n.language}-${i18n.language.toUpperCase()}`;
  const date = new Date(dateString);
  return date.toLocaleDateString(language, { month: "long", day: "numeric" });
};
