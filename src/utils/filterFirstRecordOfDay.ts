import { MultipleDaysResponse } from "../interface";

export const filterFirstRecordOfDay = (data: MultipleDaysResponse) => {
  const filteredData = [];
  const processedDays = new Set(); // Keep track of processed days

  if (!data.list) {
    return filteredData;
  }

  for (const record of data.list) {
    const date = new Date(record.dt_txt);
    if (date.getHours() === 12 && !processedDays.has(date.toDateString())) {
      // Add this record to filteredData
      filteredData.push(record);
      // Mark this day as processed
      processedDays.add(date.toDateString());
    }
  }
  return filteredData;
};
