import { useTranslation } from "react-i18next";

import styles from "./Providers.module.css";

import ProvPurpul from "@/assets/icons/providersPurpul.svg";
import { useProvidersQuery } from "@/entities/home/queries";

export const Providers = () => {
  const { t } = useTranslation();
  const { data: providers = [], isLoading, isError } = useProvidersQuery();

  return (
    <div className={styles.providers}>
      <div className={styles.providers__top}>
        <div className={styles.providers__title}>
          <div>{t("sections.providers")}</div>
        </div>
      </div>
      <div className={styles.providers__content}>
        {isLoading && <div>{t("common.loading")}</div>}
        {isError && <div>{t("common.requestFailed")}</div>}
        {!isLoading &&
          !isError &&
          providers.map((provider) => (
            <a key={provider.id} className={styles.providers__item} href={provider.href}>
              <img src={provider.logo} alt={provider.name} loading="lazy" />
            </a>
          ))}
      </div>
    </div>
  );
};
