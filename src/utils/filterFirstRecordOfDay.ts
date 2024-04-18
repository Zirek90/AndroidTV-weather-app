export const filterFirstRecordOfDay = (data) => {
  const filteredData = [];
  const processedDays = new Set(); // Keep track of processed days

  for (const record of data.list) {
    const date = new Date(record.dt_txt);
    if (date.getHours() === 12 && !processedDays.has(date.toDateString())) {
      // Add this record to filteredData
      filteredData.push(record);
      // Mark this day as processed
      processedDays.add(date.toDateString());
    }

    // const day = date.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });

    // Check if this day has already been processed
    // if (!processedDays.has(day)) {
    //   // Add this record to filteredData
    //   filteredData.push(record);
    //   // Mark this day as processed
    //   processedDays.add(day);
    // }
  }
  return filteredData;
};
