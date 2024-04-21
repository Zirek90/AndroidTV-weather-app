const baseURL = process.env.EXPO_PUBLIC_BASE_URL;
const apiKey = process.env.EXPO_PUBLIC_API_KEY;

const apiCallGeneratorl = async (endpoints: string) => {
  try {
    const response = await fetch(endpoints);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};
export const getCurrentWeather = async (city: string) => {
  return await apiCallGeneratorl(`${baseURL}weather?q=${city}&units=metric&appid=${apiKey}`);
};

export const getFutureWeather = async (city: string) => {
  return await apiCallGeneratorl(`${baseURL}forecast?q=${city}&units=metric&appid=${apiKey}`); // cnt for weather for 5 days
};
