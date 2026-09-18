import { useTranslation } from "react-i18next";

import styles from "./HeaderUnauthorized.module.css";

import Find from "@/assets/icons/find-purpul.svg";
import Support from "@/assets/icons/support-purpul.svg";

export const HeaderUnauthorized = () => {
  const { t } = useTranslation();

  return (
    <div className={styles["header__right-block"]}>
      <div className={styles["header__right--button"]}>
        <img src={Find} alt="Find" loading="lazy" />
        {t("common.search")}
      </div>
      <div className={styles["header__right--button"]}>
        <img src={Support} alt="Support" loading="lazy" />
        {t("common.support")}
      </div>
    </div>
  );
};
