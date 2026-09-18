import styles from './Safety.module.css'

import IconAdd from "@/assets/icons/icon-add.svg";
import IconPurple from "@/assets/icons/right-purple.svg";
import {useTranslation} from "react-i18next";

export const Safety = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.safety}>
      <div className={styles["safety-title"]}>{t("sections.security")}</div>
      <div className={styles["safety-progress"]}>
        <div className={styles.progress__value}>33%</div>
      </div>
      <p className={styles["safety-verify"]}>
        <img src={IconAdd} className={styles["safety-verify__add"]} alt=""/>
        {t("profile.verifyEmail")}
        <img src={IconPurple} className={styles["safety-verify__arrow"]} alt=""/>
      </p>
      <p className={styles["safety-verify"]}>
        <img src={IconAdd} className={styles["safety-verify__add"]} alt=""/>
        {t("profile.verifyPhone")}
        <img src={IconPurple} className={styles["safety-verify__arrow"]} alt=""/>
      </p>
      <p className={styles["safety-verify"]}>
        <img src={IconAdd} className={styles["safety-verify__add"]} alt=""/>
        {t("profile.verifyPersonalData")}
        <img src={IconPurple} className={styles["safety-verify__arrow"]} alt=""/>
      </p>
    </div>
  )
}
