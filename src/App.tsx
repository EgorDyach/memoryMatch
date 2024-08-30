import { routerConfig } from "@lib/configs/RouterConfig";
import { RouterProvider } from "react-router-dom";
import "normalize.css";
import { GlobalStyles } from "@lib/theme/globalStyles";
import { Modal } from "@components/Modal/Modal";
import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";
import { store } from "./store";
import { LoaderLayout } from "@layouts/loaderLayout/LoaderLayout";
import { useEffect, useState } from "react";
import { language } from "@constants/language";
import { TimerProvider } from "./contexts/TimerContext";

declare global {
  interface Window {
    Telegram: {
      WebApp: {
        BackButton: {
          isVisible: boolean;
          onClick: (callback: () => void) => void;
          offClick: (callback: () => void) => void;
          show: () => void;
          hide: () => void;
        };
        HapticFeedback: {
          impactOccurred: (
            style: "light" | "medium" | "heavy" | "rigid" | "soft"
          ) => void;
          notificationOccurred: (type: "error" | "success" | "warning") => void;
          selectionChanged: () => void;
        };
        expand: () => void;
        enableClosingConfirmation: () => void;
        disableVerticalSwipes: VoidFunction;
        initData: string; // Добавлено
        initDataUnsafe: {
          hash: string;
          user: {
            first_name: string;
            last_name: string;
            username: string;
            id: number;
            language_code: string;
          };
        }; // Добавлено
        openTelegramLink: (url: string) => void; // Добавлено
        openLink: (
          url: string,
          options?: { try_instant_view: boolean }
        ) => void;
        platform: string;
        version: string;
      };
    };
  }
}

function App() {
  const langJson: Record<string, unknown> = language;

  const [, setUserLanguage] = useState<string>(
    localStorage.getItem("lang") || "en"
  );

  useEffect(() => {
    window.Telegram.WebApp.expand();
    window.Telegram.WebApp.enableClosingConfirmation();
    window.Telegram.WebApp.disableVerticalSwipes();
    if (
      window.Telegram != null &&
      window.Telegram.WebApp != null &&
      window.Telegram.WebApp.initDataUnsafe != null &&
      window.Telegram.WebApp.initDataUnsafe.user != null
    ) {
      const lang =
        langJson[window.Telegram.WebApp.initDataUnsafe.user.language_code] ==
        null
          ? "en"
          : window.Telegram.WebApp.initDataUnsafe.user.language_code;
      localStorage.setItem("lang", lang);
      setUserLanguage(lang);
    }

    document.body.style.overflowY = "hidden";
    document.body.style.height = `${window.innerHeight}px`;

    const onTouchStart = () => {};
    const onTouchMove = () => {};

    document.documentElement.addEventListener("touchstart", onTouchStart, {
      passive: false,
    });
    document.documentElement.addEventListener("touchmove", onTouchMove, {
      passive: false,
    });

    return () => {
      document.body.style.overflowY = "";
      document.body.style.marginTop = "";
      document.body.style.height = "";
      document.body.style.paddingBottom = "";
      document.documentElement.removeEventListener("touchstart", onTouchStart);
      document.documentElement.removeEventListener("touchmove", onTouchMove);
    };
  }, [langJson]);
  return (
    <Provider store={store}>
      <TimerProvider>
        <LoaderLayout>
          <SnackbarProvider />
          <GlobalStyles />
          <Modal />
          <RouterProvider router={routerConfig}></RouterProvider>
        </LoaderLayout>
      </TimerProvider>
    </Provider>
  );
}

export default App;
