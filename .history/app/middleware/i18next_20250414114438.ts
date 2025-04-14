import { unstable_createI18nextMiddleware } from "remix-i18next/middleware";
import en from "@/locales/en";
import es from "@/locales/es";

export const [i18nextMiddleware, getLocale, getInstance] =
  unstable_createI18nextMiddleware({
    detection: {
      supportedLanguages: ["es", "en"],
      fallbackLanguage: "en",
      findLocale(request) {
        let locale = request.url.split("/").at(1) || "en";
        return locale;
      },
    },
    i18next: {
      resources: { en: { translation: en }, es: { translation: es } },
    },
  });
