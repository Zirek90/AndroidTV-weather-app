import { useLayoutEffect, useState, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface UseAsyncStorageReturn {
  storedCity: string;
  setData: (value: string) => void;
}

export const UseAsyncStorage = (): UseAsyncStorageReturn => {
  const [storedCity, setStoredCity] = useState("Krakow");

  useLayoutEffect(() => {
    const getAsyncData = async () => {
      try {
        const value = await AsyncStorage.getItem("city");
        if (value !== null) {
          setStoredCity(value);
        }
      } catch (e: unknown) {
        console.log("Failed to read city", e);
      }
    };
    getAsyncData();
  }, []);

  const setAsyncData = useCallback(async (value: string) => {
    try {
      await AsyncStorage.setItem("city", value);
    } catch (e: unknown) {
      console.log(`Failed to save city =${value}`, e);
    }
  }, []);

  return { setData: setAsyncData, storedCity };
};
