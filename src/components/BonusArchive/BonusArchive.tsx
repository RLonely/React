import styles from "./BonusArchive.module.css";

import IconExclamation from "@/assets/icons/icon-exclamation.svg";
import IconTime from "@/assets/icons/icon-time.svg";
import ImageBonuses from "@/assets/icons/plug.jpeg";
import ImageBlazingCoin from "@/assets/icons/plug.jpeg";
import {useTranslation} from "react-i18next";

export const BonusArchive = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className={styles.archive__cards}>
        <div className={styles.archive__card}>
          <div className={styles["archive__card-top"]}>
            <div className={styles.archive__status}>
              {t("welcomeBonus.expired")}
            </div>
            <img src={IconExclamation}/>
          </div>
          <div className={styles["archive__card-row"]}>
            <div className={styles.archive__text}>
              <div>
                <p className={styles["archive__text-title"]}>{t("welcomeBonus.title")}</p>
                <span className={styles["archive__text-desc"]}>300% + 300 FS</span>
              </div>
              <div className={styles["archive__card-time"]}>
                <img src={IconTime} />
                16.06 - 24.07.2026
              </div>
            </div>
            <img className={styles["archive__card-image"]} src={ImageBonuses} />
          </div>
          <button className={styles.archive__button} disabled>{t("tasks.get")}</button>
        </div>

        <div className={styles.archive__card}>
          <div className={styles["archive__card-top"]}>
            <div className={styles.archive__status}>
              {t("welcomeBonus.expired")}
            </div>
            <img src={IconExclamation}/>
          </div>
          <div className={styles["archive__card-row"]}>
            <div className={styles.archive__text}>
              <div>
                <p className={styles["archive__text-title"]}>{t("welcomeBonus.title")}</p>
                <p className={styles["archive__text-title"]}>{t("welcomeBonus.title")}</p>
                <span className={styles["archive__text-desc"]}>300% + 300 FS</span>
              </div>
              <div className={styles["archive__card-time"]}>
                <img src={IconTime}/>
                16.06 - 24.07.2026
              </div>
            </div>
            <img className={styles["archive__card-image"]} src={ImageBonuses}/>
          </div>
          <button className={styles.archive__button} disabled>{t("tasks.get")}</button>
        </div>

        <div className={styles.archive__card}>
          <div className={styles["archive__card-top"]}>
            <div className={styles.archive__status}>
              {t("welcomeBonus.expired")}
            </div>
            <img src={IconExclamation}/>
          </div>
          <div className={styles["archive__card-row"]}>
            <div className={styles.archive__text}>
              <div>
                <p className={styles["archive__text-title"]}>{t("welcomeBonus.title")}</p>
                <p className={styles["archive__text-title"]}>{t("welcomeBonus.title")}</p>
                <span className={styles["archive__text-desc"]}>300% + 300 FS</span>
              </div>
              <div className={styles["archive__card-time"]}>
                <img src={IconTime}/>
                16.06 - 24.07.2026
              </div>
            </div>
            <img className={styles["archive__card-image"]} src={ImageBlazingCoin}/>
          </div>
          <button className={styles.archive__button} disabled>{t("tasks.get")}</button>
        </div>

        <div className={styles.archive__card}>
          <div className={styles["archive__card-top"]}>
            <div className={styles.archive__status}>
              {t("welcomeBonus.expired")}
            </div>
            <img src={IconExclamation}/>
          </div>
          <div className={styles["archive__card-row"]}>
            <div className={styles.archive__text}>
              <div>
                <p className={styles["archive__text-title"]}>{t("welcomeBonus.blazingCoins")} 20</p>
                <span className={styles["archive__text-desc"]}>100 FS</span>
              </div>
              <div className={styles["archive__card-time"]}>
                <img src={IconTime}/>
                16.06 - 24.07.2026
              </div>
            </div>
            <img className={styles["archive__card-image"]} src={ImageBlazingCoin}/>
          </div>
          <button className={styles.archive__button} disabled>{t("tasks.get")}</button>
        </div>
      </section>
    </>
  )
}
