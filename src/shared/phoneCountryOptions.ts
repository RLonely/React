import countries from "i18n-iso-countries";
import azLocale from "i18n-iso-countries/langs/az.json";
import enLocale from "i18n-iso-countries/langs/en.json";
import kkLocale from "i18n-iso-countries/langs/kk.json";
import kyLocale from "i18n-iso-countries/langs/ky.json";
import ruLocale from "i18n-iso-countries/langs/ru.json";
import uzLocale from "i18n-iso-countries/langs/uz.json";
import { AsYouType, parsePhoneNumberFromString } from "libphonenumber-js";
import { getCountryCallingCode, type Country } from "react-phone-number-input";

import Money from "@/assets/icons/money.svg";
import type { SelectOption } from "@/components/ui/SelectInput/types";
import type { AppLanguage } from "@/i18n";

export type CurrencyCode = "azn" | "kgs" | "kzt" | "rub" | "usd" | "uzs";

export type CountryOption = SelectOption & {
  value: CurrencyCode;
  language: AppLanguage;
  country: Country;
  dialCode: string;
};

const rawCountryOptions: Array<Omit<CountryOption, "dialCode">> = [
  {
    value: "azn",
    label: "AZN",
    icon: Money,
    language: "az",
    country: "AZ",
  },
  {
    value: "usd",
    label: "USD",
    icon: Money,
    language: "en",
    country: "US",
  },
  {
    value: "kzt",
    label: "KZT",
    icon: Money,
    language: "kk",
    country: "KZ",
  },
  {
    value: "kgs",
    label: "KGS",
    icon: Money,
    language: "ky",
    country: "KG",
  },
  {
    value: "rub",
    label: "RUB",
    icon: Money,
    language: "ru",
    country: "RU",
  },
  {
    value: "uzs",
    label: "UZS",
    icon: Money,
    language: "uz",
    country: "UZ",
  },
];

export const countryOptions: CountryOption[] = rawCountryOptions.map((option) => ({
  ...option,
  dialCode: `+${getCountryCallingCode(option.country)}`,
}));

countries.registerLocale(azLocale);
countries.registerLocale(enLocale);
countries.registerLocale(kkLocale);
countries.registerLocale(kyLocale);
countries.registerLocale(ruLocale);
countries.registerLocale(uzLocale);

export const getDefaultCountryOption = (language?: string): CountryOption =>
  countryOptions.find((option) => option.language === language) || countryOptions[0];

export const getCountryName = (country: Country, language?: string) => {
  const locale = countryOptions.find((option) => option.language === language)?.language || "en";
  return countries.getName(country, locale) || countries.getName(country, "en") || country;
};

export const formatPhoneForCountry = (value: string, country: Country) => {
  const formatter = new AsYouType(country);
  return formatter.input(value);
};

export const isPhoneValidForCountry = (value: string, country: Country) => {
  const phoneNumber = parsePhoneNumberFromString(value, country);
  return phoneNumber?.isValid() ?? false;
};
