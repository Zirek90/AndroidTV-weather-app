import { useState, useCallback, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTranslation } from "react-i18next";

interface UseAsyncStorageReturn {
  storedCity: string;
  setData: (key: string, value: string) => void;
}

export const UseAsyncStorage = (): UseAsyncStorageReturn => {
  const [storedCity, setStoredCity] = useState("Krakow");
  const { i18n } = useTranslation();

  useEffect(() => {
    const getAsyncData = async () => {
      try {
        const cityValue = await AsyncStorage.getItem("city");
        const languageValue = await AsyncStorage.getItem("language");
        if (cityValue !== null) {
          setStoredCity(cityValue);
        }
        if (languageValue !== null) {
          i18n.changeLanguage(languageValue);
        }
      } catch (e: unknown) {
        console.log("Failed to read city", e);
      }
    };
    getAsyncData();
  }, [i18n]);

  const setAsyncData = useCallback(async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e: unknown) {
      console.log(`Failed to save city =${value}`, e);
    }
  }, []);

  return { setData: setAsyncData, storedCity };
};
