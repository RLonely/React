import styles from "./Tasks.module.css";

import IconCheck from "@/assets/icons/check-round.svg";
import IconPaw from "@/assets/icons/coin-paw.svg";
import IconEmail from "@/assets/icons/email-round.svg";
import IconOpenArrow from "@/assets/icons/arrow-right-open.svg";
import IconLock from "@/assets/icons/lock-round.svg";
import IconPhone from "@/assets/icons/phone-round.svg";
import {useTranslation} from "react-i18next";

export const Tasks = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className={styles.tasks__content}>
        <div className={styles["tasks__item-steps"]}>
          <div className={styles.tasks__progress}>
            <div className={styles["tasks__progress-value"]}>1/4</div>
          </div>
          <div className={styles["tasks__steps-text"]}>
            <div className={styles["tasks__steps-title"]}>{t("tasks.title")}</div>
            <div className={styles["tasks__steps-desc"]}>
              {t("tasks.description")}
            </div>
          </div>
        </div>
        <div className={`${styles["tasks__item"]} ${styles["tasks__done"]}`}>
          <div className={styles["tasks__item-row"]}>
            <img src={IconCheck} alt="" loading="lazy"/>
            <div className={styles["tasks__item-text"]}>
              <div className={styles["tasks__item-title"]}>
                {t("tasks.forRegistration")}
              </div>
              <div className={styles["tasks__item-desc"]}>
                <img src={IconPaw} alt="" loading="lazy"/>
                +300 PLC
              </div>
            </div>
          </div>
          <button className={styles["tasks__done-btn"]}>
            {t("tasks.get")}
          </button>
        </div>
        <div className={styles.tasks__item}>
          <div className={styles["tasks__item-row"]}>
            <img src={IconEmail} alt="" loading="lazy"/>
            <div className={styles["tasks__item-text"]}>
              <div className={styles["tasks__item-title"]}>
                {t("tasks.emailConfirmation")}
              </div>
              <div className={styles["tasks__item-desc"]}>
                <img src={IconPaw} alt="" loading="lazy"/>
                +100 PLC
              </div>
            </div>
          </div>
          <button className={styles["tasks__item-btn"]}>
            <img src={IconOpenArrow} alt="" loading="lazy"/>
          </button>
        </div>
        <div className={styles.tasks__item}>
          <div className={styles["tasks__item-row"]}>
            <img src={IconPhone} alt="" loading="lazy"/>
            <div className={styles["tasks__item-text"]}>
              <div className={styles["tasks__item-title"]}>
                {t("tasks.numberVerification")}
              </div>
              <div className={styles["tasks__item-desc"]}>
                <img src={IconPaw} alt="" loading="lazy"/>
                +150 PLC
              </div>
            </div>
          </div>
          <button className={styles["tasks__item-btn"]}>
            <img src={IconOpenArrow} alt="" loading="lazy"/>
          </button>
        </div>
        <div className={styles["tasks__item-lock"]}>
          <div className={styles["tasks__item-row"]}>
            <img src={IconLock} alt="" loading="lazy"/>
            <div className={styles["tasks__item-text"]}>
              <div className={`${styles["tasks__item-title"]} ${styles["lock-title"]}`}>
                {t("tasks.forRegistration")}
              </div>
              <div className={`${styles["tasks__item-desc"]} ${styles["lock-desc"]}`}>
                {t("tasks.rewardReceived")}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
