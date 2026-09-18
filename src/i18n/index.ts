import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { resources, supportedLanguages, type AppLanguage } from "./resources";

const LANGUAGE_STORAGE_KEY = "app_language";
export const defaultLanguage: AppLanguage = "en";

const resolveInitialLanguage = (): AppLanguage => {
  if (typeof window === "undefined") {
    return defaultLanguage;
  }

  const storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (storedLanguage && supportedLanguages.includes(storedLanguage as AppLanguage)) {
    return storedLanguage as AppLanguage;
  }

  const browserLanguage = navigator.language.split("-")[0] as AppLanguage;
  if (supportedLanguages.includes(browserLanguage)) {
    return browserLanguage;
  }

  return defaultLanguage;
};

void i18n.use(initReactI18next).init({
  resources,
  lng: resolveInitialLanguage(),
  fallbackLng: defaultLanguage,
  supportedLngs: [...supportedLanguages],
  defaultNS: "common",
  interpolation: {
    escapeValue: false,
  },
  returnNull: false,
});

export const setAppLanguage = async (language: AppLanguage): Promise<void> => {
  await i18n.changeLanguage(language);

  if (typeof window !== "undefined") {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }
};

export const isSupportedLanguage = (language: string): language is AppLanguage =>
  supportedLanguages.includes(language as AppLanguage);

export const getCurrentLanguage = (): AppLanguage => {
  const language = i18n.language.split("-")[0];

  return isSupportedLanguage(language) ? language : defaultLanguage;
};

export { i18n };
export type { AppLanguage };
