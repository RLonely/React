import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";

import styles from "./TermsPage.module.css";

import Close from "@/assets/icons/close.svg";
import { getLocalizedPath } from "@/i18n/routing";

type LanguageParam = {
  lang?: string;
};

export const TermsPage: React.FC = () => {
  const { t } = useTranslation();
  const { lang } = useParams<LanguageParam>();
  const registrationPath = getLocalizedPath(lang, "/registration");

  return (
    <div className={styles.container}>
      <div className={styles.terms}>
        <Link to={registrationPath} className={styles.terms__close} aria-label={t("auth.close")}>
          <img src={Close} alt="" loading="lazy" />
        </Link>

        <h1 className={styles.terms__title}>{t("legal.termsTitle")}</h1>
        <p className={styles.terms__lead}>{t("legal.termsLead")}</p>

        <section className={styles.terms__section}>
          <h2>{t("legal.termsSectionTitle1")}</h2>
          <p>{t("legal.termsSectionText1")}</p>
        </section>

        <section className={styles.terms__section}>
          <h2>{t("legal.termsSectionTitle2")}</h2>
          <p>{t("legal.termsSectionText2")}</p>
        </section>

        <section className={styles.terms__section}>
          <h2>{t("legal.termsSectionTitle3")}</h2>
          <p>{t("legal.termsSectionText3")}</p>
        </section>
      </div>
    </div>
  );
};
