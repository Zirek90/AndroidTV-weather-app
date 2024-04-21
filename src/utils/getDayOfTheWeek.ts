export const getDateOfTheWeek = (dateString: string) => {
  const date = new Date(dateString);
  const dayOfWeek = date.getDay();
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return daysOfWeek[dayOfWeek];
};
