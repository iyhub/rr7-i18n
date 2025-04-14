import { unstable_createI18nextMiddleware } from "remix-i18next/middleware";
import en from "@/locales/en";
import es from "@/locales/es";

export const [i18nextMiddleware, getLocale, getInstance] =
  unstable_createI18nextMiddleware({
    detection: {
      supportedLanguages: ["en", "es"],
      fallbackLanguage: "en",
    },
    i18next: {
      resources: { en: { translation: en }, es: { translation: es } },
      // Other i18next options are available here
    },
  });
