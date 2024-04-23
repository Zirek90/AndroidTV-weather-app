import i18n from "../i18n";

export const getDateOfTheWeek = (dateString: string) => {
  const date = new Date(dateString);
  const dayOfWeek = date.getDay();
  const daysOfWeek = [
    i18n.t("weekdays.sunday"),
    i18n.t("weekdays.monday"),
    i18n.t("weekdays.tuesday"),
    i18n.t("weekdays.wednesday"),
    i18n.t("weekdays.thursday"),
    i18n.t("weekdays.friday"),
    i18n.t("weekdays.saturday"),
  ];
  return daysOfWeek[dayOfWeek];
};
