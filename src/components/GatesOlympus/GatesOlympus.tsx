import { useTranslation } from "react-i18next";

import styles from "./GatesOlympus.module.css";

import Arrow from "@/assets/icons/chevron-right.svg";
import Shadow from "@/assets/images/bottom_gates.png";
import GatesOlymp from "@/assets/images/gatesofolympus.jpg";

export const GatesOlympus = () => {
  const { t } = useTranslation();

  return (
    <a href="" className={styles.GatesOlympus}>
      <div className={styles.GatesOlympus__item}>
        <div className={styles["GatesOlympus__item--left"]}>
          <img src={GatesOlymp} alt="GatesOlymp" loading="lazy" />
          <div className={styles.GatesOlympus__text}>
            <div className={styles.GatesOlympus__title}>{t("gatesOlympus.title")}</div>
            <div className={styles.GatesOlympus__desc}>{t("gatesOlympus.provider")}</div>
          </div>
        </div>
        <img src={Arrow} alt="Arrow" loading="lazy" />
      </div>
      <img className={styles.GatesOlympus__shadow} src={Shadow} alt="Shadow" />
    </a>
  );
};
