import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { BackgroundProvider } from "./src/context";
import { useCallback, useEffect, useState } from "react";
import * as Updates from "expo-updates";
import { WeatherWrapper } from "./src/components/WeatherWrapper";
import * as SplashScreen from "expo-splash-screen";
import "./src/i18n";

export default function App() {
  const queryClient = new QueryClient();
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setAppIsReady(true);
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  async function onFetchUpdateAsync() {
    try {
      const update = await Updates.checkForUpdateAsync();

      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    } catch (error) {
      alert(`Error fetching latest Expo update: ${error}`);
    }
  }

  useEffect(() => {
    if (!__DEV__) {
      onFetchUpdateAsync();
    }
  }, []);

  if (!appIsReady) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <BackgroundProvider>
        <WeatherWrapper prepareSplashScreen={onLayoutRootView} />
      </BackgroundProvider>
    </QueryClientProvider>
  );
}
