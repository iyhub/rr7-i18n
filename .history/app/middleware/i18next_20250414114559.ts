import { unstable_createI18nextMiddleware } from "remix-i18next/middleware";
import en from "@/locales/en";
import es from "@/locales/es";
import { createCookie } from "react-router";

export const localeCookie = createCookie("lng", {
  path: "/",
  sameSite: "lax",
  secure: process.env.NODE_ENV === "production",
  httpOnly: true,
});

export const [i18nextMiddleware, getLocale, getInstance] =
  unstable_createI18nextMiddleware({
    detection: {
      supportedLanguages: ["es", "en"],
      fallbackLanguage: "en",
      cookie: localeCookie,
      findLocale(request) {
        let locale = request.url.split("/").at(1);
        return Promise.resolve(locale ? [locale] : ["en"]);
      },
    },
    i18next: {
      resources: { en: { translation: en }, es: { translation: es } },
    },
  });
