import styles from "./DepositBonus.module.css";
import iconGift from "@/assets/icons/gift.png";
import iconArrowDown from "@/assets/icons/arrow-down.svg";
import React, {useState} from "react";
import {useTranslation} from "react-i18next";

export const DepositBonus = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.deposit__bonus}>
        <p className={styles["deposit__bonus-info"]}>{t("wallet.useBonus")}</p>
        <div className={`${styles["deposit__bonus-content"]} ${isChecked ? styles.active : ""}`}>
          <div className={styles["deposit__bonus-image"]}>
            <img src={iconGift} alt="" loading="lazy"/>
          </div>
          <div className={styles["deposit__bonus-text"]}>
            <p className={styles["deposit__bonus-title"]}>
              {t("welcomeBonus.depositTitle")}
              <img className={styles["deposit__money-icon"]} src={iconArrowDown} alt="" loading="lazy"/>
            </p>
            <span className={styles["deposit__bonus-increase"]}>300% + 300 FS</span>
          </div>
          <input className={styles["deposit__checkbox"]} type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)}/>
        </div>
      </div>
    </>
  )
}
