import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import type { Country } from "react-phone-number-input";
import { Link, useNavigate, useParams } from "react-router-dom";

import styles from "./LoginPage.module.css";

import Close from "@/assets/icons/close-transparent.svg";
import LoadingIcon from "@/assets/icons/loader.svg";
import Banner from "@/assets/icons/plug.jpeg";
import { Input } from "@/components/ui/Input/Input";
import { PhoneCountrySelect } from "@/components/ui/PhoneCountrySelect/PhoneCountrySelect";
import { useLoginMutation } from "@/entities/auth/queries";
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

const loginTabs: AuthTab[] = [
  { name: "phone", value: "phone" },
  { name: "email", value: "email" },
];

export const LoginPage = () => {
  const { t } = useTranslation();
  const { lang } = useParams<LanguageParam>();
  const navigate = useNavigate();
  const { mutateAsync: loginUser } = useLoginMutation();
  const [activeTab, setActiveTab] = useState<AuthTab["value"]>("phone");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [contactError, setContactError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const isPhoneTab = activeTab === "phone";
  const homePath = getLocalizedPath(lang, "/");
  const resetPasswordPath = getLocalizedPath(lang, "/login/reset");
  const registrationPath = getLocalizedPath(lang, "/registration");
  const locale = lang || "en";
  const defaultCountryOption = getDefaultCountryOption(lang);

  const [selectedPhoneCountry, setSelectedPhoneCountry] = useState<Country>(
    defaultCountryOption.country,
  );

  useEffect(() => {
    setSelectedPhoneCountry(defaultCountryOption.country);
  }, [defaultCountryOption]);

  useEffect(() => {
    if (!contact || !isPhoneTab) {
      return;
    }

    setContact((prevContact) => formatPhoneForCountry(prevContact, selectedPhoneCountry));
  }, [isPhoneTab, contact, selectedPhoneCountry]);

  const handleTabChange = (nextTab: AuthTab["value"]) => {
    setActiveTab(nextTab);
    setContact("");
    setContactError("");
    setPasswordError("");
  };

  const validate = () => {
    let nextContactError = "";
    let nextPasswordError = "";

    if (!contact.trim()) {
      nextContactError = t(isPhoneTab ? "auth.invalidPhone" : "auth.invalidEmail");
    } else if (isPhoneTab && !isPhoneValidForCountry(contact, selectedPhoneCountry)) {
      nextContactError = t("auth.invalidPhone");
    }

    if (!password.trim()) {
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
      await loginUser({
        method: activeTab,
        password,
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
    setSelectedPhoneCountry(country);
    setContactError("");
  };

  return (
    <div className={styles.container}>
      <form className={styles.login} onSubmit={handleSubmit}>
        <Link to={homePath} className={styles.login__close} aria-label={t("auth.close")}>
          <img src={Close} alt="" loading="lazy" />
        </Link>

        <div className={styles.login__banner}>
          <img src={Banner} alt="" loading="lazy" />
        </div>

        <div className={styles.login__title}>{t("common.login")}</div>

        <div className={styles.login__tabs}>
          {loginTabs.map((tab) => (
            <button
              key={tab.value}
              type="button"
              onClick={() => handleTabChange(tab.value)}
              className={`${styles.login__tab} ${
                activeTab === tab.value ? styles["login__tab-active"] : ""
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
                id="login-phone"
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
            <div className={styles.login__email}>
              <Input
                className={styles.input__item}
                id="login-email"
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

        <div className={styles.login__password}>
          <Input
            className={styles.input__item}
            id="login-password"
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

        <Link to={resetPasswordPath} className={styles.login__reset}>
          {t("auth.forgotPassword")}
        </Link>

        <button
          type="submit"
          className={`${styles.register__button} ${
            isLoading ? styles.register__button_loading : ""
          }`}
          disabled={isLoading}
        >
          {isLoading ? (
            <img src={LoadingIcon} alt={t("common.loading")} className={styles.loadingIcon} />
          ) : (
            t("auth.loginButton")
          )}
        </button>
      </form>

      <div className={styles.login__cta}>
        {t("auth.noAccount")} <Link to={registrationPath}>{t("auth.createAccount")}</Link>
      </div>
    </div>
  );
};
