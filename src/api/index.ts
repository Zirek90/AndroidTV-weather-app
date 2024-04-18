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
export const getWeather = async (city: string) => {
  return await apiCallGeneratorl(`${baseURL}q=${city}&units=metric&appid=${apiKey}`);
};
