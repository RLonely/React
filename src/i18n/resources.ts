import { az } from "./locales/az";
import { en } from "./locales/en";
import { kk } from "./locales/kk";
import { ky } from "./locales/ky";
import { ru } from "./locales/ru";
import { uz } from "./locales/uz";

export const supportedLanguages = ["az", "en", "kk", "ky", "ru", "uz"] as const;

export type AppLanguage = (typeof supportedLanguages)[number];

export const resources = {
  az: { common: az },
  en: { common: en },
  kk: { common: kk },
  ky: { common: ky },
  ru: { common: ru },
  uz: { common: uz },
} as const;
