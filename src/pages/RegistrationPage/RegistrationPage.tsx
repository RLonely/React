import { useEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import type { Country } from "react-phone-number-input";
import { Link, useNavigate, useParams } from "react-router-dom";

import styles from "./RegistrationPage.module.css";

import Arrow from "@/assets/icons/arrow-down.svg";
import Close from "@/assets/icons/close-transparent.svg";
import LoadingIcon from "@/assets/icons/loader.svg";
import { Checkbox } from "@/components/ui/Checkbox/Checkbox";
import { Input } from "@/components/ui/Input/Input";
import { PhoneCountrySelect } from "@/components/ui/PhoneCountrySelect/PhoneCountrySelect";
import { SelectInput } from "@/components/ui/SelectInput/SelectInput";
import type { SelectOption } from "@/components/ui/SelectInput/types";
import { WelcomeBonus } from "@/components/ui/WelcomeBonus/WelcomeBonus";
import { useRegisterMutation } from "@/entities/auth/queries";
import type { AuthMethod } from "@/entities/auth/types";
import { getLocalizedPath } from "@/i18n/routing";
import {
  countryOptions,
  formatPhoneForCountry,
  getDefaultCountryOption,
  isPhoneValidForCountry,
} from "@/shared/phoneCountryOptions";

type LanguageParam = {
  lang?: string;
};

type AuthTab = {
  name: string;
  value: AuthMethod;
};

const RegistrationTabs: AuthTab[] = [
  { name: "phone", value: "phone" },
  { name: "email", value: "email" },
];

export const RegistrationPage = () => {
  const { t } = useTranslation();
  const { lang } = useParams<LanguageParam>();
  const navigate = useNavigate();
  const { mutateAsync: registerUser } = useRegisterMutation();
  const [activeTab, setActiveTab] = useState<AuthTab["value"]>("phone");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [isPromoCodeOpen, setIsPromoCodeOpen] = useState(false);
  const [contactError, setContactError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isAdultConfirmed, setIsAdultConfirmed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isPhoneTab = activeTab === "phone";
  const homePath = getLocalizedPath(lang, "/");
  const loginPath = getLocalizedPath(lang, "/login");
  const termsPath = getLocalizedPath(lang, "/terms");
  const locale = lang || "en";
  const defaultCountryOption = getDefaultCountryOption(lang);

  const [selectedCurrency, setSelectedCurrency] = useState<SelectOption>(defaultCountryOption);
  const [selectedPhoneCountry, setSelectedPhoneCountry] = useState<Country>(
    defaultCountryOption.country,
  );

  useEffect(() => {
    setSelectedCurrency(defaultCountryOption);
    setSelectedPhoneCountry(defaultCountryOption.country);
  }, [defaultCountryOption]);

  useEffect(() => {
    if (!contact || !isPhoneTab) {
      return;
    }

    setContact((prevContact) => formatPhoneForCountry(prevContact, selectedPhoneCountry));
  }, [contact, isPhoneTab, selectedPhoneCountry]);

  const handleTabChange = (nextTab: AuthTab["value"]) => {
    setActiveTab(nextTab);
    setContact("");
    if (nextTab === "phone") {
      setPassword("");
    }
    setContactError("");
    setPasswordError("");
  };

  const validate = () => {
    let nextContactError = "";
    let nextPasswordError = "";

    if (!contact.trim()) {
      nextContactError = t(isPhoneTab ? "auth.invalidPhone" : "auth.invalidEmail");
    } else if (isPhoneTab) {
      if (!isPhoneValidForCountry(contact, selectedPhoneCountry)) {
        nextContactError = t("auth.invalidPhone");
      }
    }

    if (!isPhoneTab && !password.trim()) {
      nextPasswordError = t("auth.passwordRequired");
    }

    setContactError(nextContactError);
    setPasswordError(nextPasswordError);

    return !nextContactError && !nextPasswordError;
  };

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    setIsLoading(true);

    try {
      await registerUser({
        method: activeTab,
        password: isPhoneTab ? undefined : password,
        value: contact,
      });
      navigate(homePath);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePhoneChange = (value: string) => {
    setContact(formatPhoneForCountry(value, selectedPhoneCountry));
    setContactError("");
  };

  const handleCountrySelect = (country: Country) => {
    const matchedOption = countryOptions.find((option) => option.country === country);
    setSelectedPhoneCountry(country);
    if (matchedOption) {
      setSelectedCurrency(matchedOption);
    }
    setContactError("");
  };

  const handleCurrencyChange = (option: SelectOption) => {
    setSelectedCurrency(option);
    const matchedOption = countryOptions.find(
      (phoneCountryOption) => phoneCountryOption.value === option.value,
    );

    if (matchedOption) {
      setSelectedPhoneCountry(matchedOption.country);
      setContactError("");
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.registration} onSubmit={handleSubmit}>
        <Link to={homePath} className={styles.registration__close} aria-label={t("auth.close")}>
          <img src={Close} alt="" loading="lazy" />
        </Link>

        <WelcomeBonus />

        <div className={styles.registration__title}>{t("common.registration")}</div>

        <div className={styles.registration__tabs}>
          {RegistrationTabs.map((tab) => (
            <button
              key={tab.value}
              type="button"
              onClick={() => handleTabChange(tab.value)}
              className={`${styles.registration__tab} ${
                activeTab === tab.value ? styles["registration__tab-active"] : ""
              }`}
            >
              {t(tab.value === "phone" ? "auth.phoneTab" : "auth.emailTab")}
            </button>
          ))}
        </div>

        {isPhoneTab ? (
          <div>
            <div className={styles["input__title-phone"]}>{t("auth.phoneNumber")}</div>
            <PhoneCountrySelect
              locale={locale}
              options={countryOptions}
              selectedCountry={selectedPhoneCountry}
              onSelect={handleCountrySelect}
            >
              <Input
                className={styles.input__item}
                id="register-phone"
                placeholder={
                  countryOptions.find((option) => option.country === selectedPhoneCountry)
                    ?.dialCode || countryOptions[0].dialCode
                }
                type="tel"
                value={contact}
                onChange={handlePhoneChange}
                error={contactError}
              />
            </PhoneCountrySelect>
          </div>
        ) : (
          <div>
            <div className={styles["input__title-email"]}>{t("auth.email")}</div>
            <div className={styles.registration__inputs}>
              <Input
                className={styles.input__item}
                id="register-email"
                placeholder={t("auth.emailPlaceholder")}
                type="email"
                value={contact}
                onChange={(value) => {
                  setContact(value);
                  setContactError("");
                }}
                error={contactError}
              />
            </div>
          </div>
        )}

        {!isPhoneTab && (
          <div className={styles.registration__password}>
            <Input
              className={styles.input__item}
              id="register-password"
              label={t("auth.password")}
              type="password"
              placeholder={t("auth.passwordPlaceholder")}
              value={password}
              onChange={(value) => {
                setPassword(value);
                setPasswordError("");
              }}
              error={passwordError}
            />
          </div>
        )}

        <SelectInput
          options={countryOptions}
          value={selectedCurrency}
          onChange={handleCurrencyChange}
        />

        <button
          type="button"
          className={`${styles["promo-code"]} ${isPromoCodeOpen ? styles["promo-code__drop"] : ""}`}
          onClick={() => setIsPromoCodeOpen((prev) => !prev)}
          aria-expanded={isPromoCodeOpen}
        >
          <div>
            {t("auth.promoCode")} <span>({t("auth.optional")})</span>
          </div>
          <div className={styles["promo-code__icon"]}>
            <img
              src={Arrow}
              alt=""
              loading="lazy"
              className={`${styles["promo-code__rotate"]} ${
                isPromoCodeOpen ? styles["promo-code__rotate-open"] : ""
              }`}
            />
          </div>
        </button>

        {isPromoCodeOpen && (
          <>
            <Input
              className={styles.input__item}
              id="promocode"
              type="text"
              placeholder={t("auth.promoCodePlaceholder")}
              value={promoCode}
              onChange={setPromoCode}
            />
          </>
        )}

        <Checkbox checked={isAdultConfirmed} onChange={setIsAdultConfirmed}>
          <Trans
            i18nKey="auth.ageConfirmation"
            components={{
              terms: <Link to={termsPath} className={styles.registration__terms} />,
            }}
          />
        </Checkbox>

        <button
          type="submit"
          className={`${styles.register__button} ${
            isLoading ? styles.register__button_loading : ""
          }`}
          disabled={!isAdultConfirmed || isLoading}
        >
          {isLoading ? (
            <img src={LoadingIcon} alt={t("common.loading")} className={styles.loadingIcon} />
          ) : (
            t("auth.registerButton")
          )}
        </button>
      </form>

      <div className={styles.have__button}>
        {t("auth.haveAccount")} <Link to={loginPath}>{t("auth.signIn")}</Link>
      </div>
    </div>
  );
};
