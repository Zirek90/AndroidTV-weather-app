import { PropsWithChildren, createContext, useContext, useMemo, useState } from "react";
import { ImageBackground, ImageSourcePropType, StyleSheet } from "react-native";
import { WeatherEnum } from "../../enum";

type BackgroundProviderState = {
  background: ImageSourcePropType;
  handleWeatherChange: (e: WeatherEnum) => void;
};

const BackgroundContext = createContext<BackgroundProviderState>(null);

export const BackgroundProvider = ({ children }: PropsWithChildren) => {
  const [currentWeather, setCurrentWeather] = useState(WeatherEnum.CLEAR);

  const background = useMemo(() => {
    switch (currentWeather) {
      case WeatherEnum.CLEAR:
        return require("../../assets/background/sunny.jpg");
      case WeatherEnum.DRIZZLE:
        return require("../../assets/background/drizzle.jpg");
      case WeatherEnum.RAIN:
        return require("../../assets/background/rainy.jpg");
      case WeatherEnum.CLOUDS:
        return require("../../assets/background/cloudy.jpg");
      case WeatherEnum.SNOW:
        return require("../../assets/background/snowy.jpg");
      case WeatherEnum.THUNDERSTORM:
        return require("../../assets/background/stormy.jpg");
      case WeatherEnum.HAZE:
        return require("../../assets/background/haze.jpg");
      default:
        return require("../../assets/background/sunny.jpg");
    }
  }, [currentWeather]);

  const handleWeatherChange = (weather: WeatherEnum) => {
    if (currentWeather === weather) return;

    setCurrentWeather(weather);
  };

  return (
    <BackgroundContext.Provider value={{ background, handleWeatherChange }}>
      <ImageBackground source={background} resizeMode="cover" style={styles.backgroundImage}>
        {children}
      </ImageBackground>
    </BackgroundContext.Provider>
  );
};

export const useBackgroundContext = () => {
  const state = useContext(BackgroundContext);
  if (state === null) {
    throw new Error("State is still null");
  } else if (state === undefined) {
    throw new Error("Attempt to access from outside of context");
  }
  return state;
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
});
