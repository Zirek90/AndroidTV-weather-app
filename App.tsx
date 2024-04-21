import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { BackgroundProvider } from "./src/context";
import { useEffect } from "react";
import * as Updates from "expo-updates";
import { WeatherWrapper } from "./src/components/WeatherWrapper";

export default function App() {
  const queryClient = new QueryClient();

  async function onFetchUpdateAsync() {
    try {
      const update = await Updates.checkForUpdateAsync();

      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    } catch (error) {
      // You can also add an alert() to see the error message in case of an error when fetching updates.
      alert(`Error fetching latest Expo update: ${error}`);
    }
  }

  useEffect(() => {
    if (!__DEV__) {
      onFetchUpdateAsync();
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <BackgroundProvider>
        <WeatherWrapper />
      </BackgroundProvider>
    </QueryClientProvider>
  );
}
