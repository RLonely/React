import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";

import styles from "./LoginResetPage.module.css";

import Close from "@/assets/icons/close-transparent.svg";
import Support from "@/assets/icons/support.svg";
import { Input } from "@/components/ui/Input/Input";
import { getLocalizedPath } from "@/i18n/routing";

type LanguageParam = {
  lang?: string;
};

export const LoginResetPage = () => {
  const { t } = useTranslation();
  const { lang } = useParams<LanguageParam>();
  const [account, setAccount] = useState("");
  const loginPath = getLocalizedPath(lang, "/login");

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className={styles.container}>
      <form className={styles["login-reset"]} onSubmit={handleSubmit}>
        <Link to={loginPath} className={styles["login-reset__close"]} aria-label={t("auth.close")}>
          <img src={Close} alt="" loading="lazy" />
        </Link>

        <div className={styles["login-reset__title"]}>{t("auth.restorePassword")}</div>
        <div className={styles["login-reset__description"]}>
          {t("auth.restorePasswordDescription")}
        </div>

        <Input
          className={styles.input__item}
          id="reset-account"
          label={t("auth.emailOrPhoneLabel")}
          placeholder={t("auth.emailOrPhonePlaceholder")}
          type="text"
          value={account}
          onChange={setAccount}
        />

        <div className={styles["input__item-captcha"]}>КАПЧА</div>

        <button type="submit" className={styles["login-reset__button"]}>
          {t("auth.restorePasswordButton")}
        </button>

        <div className={styles["login-reset__support"]}>
          <img src={Support} alt="" loading="lazy" />
          {t("common.support")}
        </div>
      </form>
    </div>
  );
};
