import styles from "./AvailableBonuses.module.css";

import IconExclamation from "@/assets/icons/icon-exclamation.svg";
import IconTime from "@/assets/icons/icon-time.svg";
import ImageBonuses from "@/assets/icons/plug.jpeg";
import ImageBlazingCoin from "@/assets/icons/plug.jpeg";
import {useContext} from "react";
import {TasksContext} from "@/Context/TasksContext";
import {useTranslation} from "react-i18next";

export const AvailableBonuses = () => {
  const { setIsPause } = useContext(TasksContext);
  const { t } = useTranslation();

  return (
    <>
      <section className={styles.accessible__cards}>
        <div className={styles.accessible__card}>
          <div className={styles["accessible__card-top"]}>
            <div className={styles.accessible__status}>
              {t("welcomeBonus.newStatus")}
            </div>
            <img src={IconExclamation} />
          </div>
          <div className={styles["accessible__card-row"]}>
            <div className={styles.accessible__text}>
              <div>
                <p className={styles["accessible__text-title"]}>{t("welcomeBonus.title")}</p>
                <span className={styles["accessible__text-desc"]}>300% + 300 FS</span>
              </div>
              <div className={styles["accessible__card-time"]}>
                <img src={IconTime} />
                16.06 - 24.07.2026
              </div>
            </div>
            <img className={styles["accessible__card-image"]} src={ImageBonuses} />
          </div>
          <button className={styles.accessible__button} onClick={(e) => {
            e.stopPropagation();
            setIsPause(true);
          }}>{t("tasks.get")}</button>
        </div>

        <div className={styles.accessible__card}>
          <div className={styles["accessible__card-top"]}>
            <img src={IconExclamation} />
          </div>
          <div className={styles["accessible__card-row"]}>
            <div className={styles.accessible__text}>
              <div>
                <p className={styles["accessible__text-title"]}>{t("welcomeBonus.title")}</p>
                <p className={styles["accessible__text-title"]}>{t("welcomeBonus.title")}</p>
                <span className={styles["accessible__text-desc"]}>300% + 300 FS</span>
              </div>
              <div className={styles["accessible__card-time"]}>
                <img src={IconTime} />
                16.06 - 24.07.2026
              </div>
            </div>
            <img className={styles["accessible__card-image"]} src={ImageBonuses} />
          </div>
          <button className={styles.accessible__button} onClick={(e) => {
            e.stopPropagation();
            setIsPause(true);
          }}>{t("tasks.get")}</button>
        </div>

        <div className={styles.accessible__card}>
          <div className={styles["accessible__card-top"]}>
            <img src={IconExclamation} />
          </div>
          <div className={styles["accessible__card-row"]}>
            <div className={styles.accessible__text}>
              <div>
                <p className={styles["accessible__text-title"]}>{t("welcomeBonus.title")}</p>
                <p className={styles["accessible__text-title"]}>{t("welcomeBonus.title")}</p>
                <span className={styles["accessible__text-desc"]}>300% + 300 FS</span>
              </div>
              <div className={styles["accessible__card-time"]}>
                <img src={IconTime} />
                16.06 - 24.07.2026
              </div>
            </div>
            <img className={styles["accessible__card-image"]} src={ImageBonuses} />
          </div>
          <button className={styles.accessible__button} onClick={(e) => {
            e.stopPropagation();
            setIsPause(true);
          }}>{t("tasks.get")}</button>
        </div>

        <div className={styles.accessible__card}>
          <div className={styles["accessible__card-top"]}>
            <div className={styles.accessible__status}>
              {t("welcomeBonus.newStatus")}
            </div>
            <img src={IconExclamation} />
          </div>
          <div className={styles["accessible__card-row"]}>
            <div className={styles.accessible__text}>
              <div>
                <p className={styles["accessible__text-title"]}>{t("welcomeBonus.blazingCoins")} 20</p>
                <span className={styles["accessible__text-desc"]}>100 FS</span>
              </div>
              <div className={styles["accessible__card-time"]}>
                <img src={IconTime} />
                16.06 - 24.07.2026
              </div>
            </div>
            <img className={styles["accessible__card-image"]} src={ImageBlazingCoin} />
          </div>
          <button className={styles.accessible__button} onClick={(e) => {
            e.stopPropagation();
            setIsPause(true);
          }}>{t("tasks.get")}</button>
        </div>

        <div className={styles.accessible__card}>
          <div className={styles["accessible__card-top"]}>
            <img src={IconExclamation} />
          </div>
          <div className={styles["accessible__card-row"]}>
            <div className={styles.accessible__text}>
              <div>
                <p className={styles["accessible__text-title"]}>{t("welcomeBonus.blazingCoins")} 20</p>
                <p className={styles["accessible__text-title"]}>{t("welcomeBonus.blazingCoins")} 20</p>
                <span className={styles["accessible__text-desc"]}>100 FS</span>
              </div>
              <div className={styles["accessible__card-time"]}>
                <img src={IconTime} />
                16.06 - 24.07.2026
              </div>
            </div>
            <img className={styles["accessible__card-image"]} src={ImageBlazingCoin} />
          </div>
          <button className={styles.accessible__button} onClick={(e) => {
            e.stopPropagation();
            setIsPause(true);
          }}>{t("tasks.get")}</button>
        </div>

        <div className={styles.accessible__card}>
          <div className={styles["accessible__card-top"]}>
            <img src={IconExclamation} />
          </div>
          <div className={styles["accessible__card-row"]}>
            <div className={styles.accessible__text}>
              <div>
                <p className={styles["accessible__text-title"]}>{t("welcomeBonus.blazingCoins")} 20</p>
                <span className={styles["accessible__text-desc"]}>100 FS</span>
              </div>
              <div className={styles["accessible__card-time"]}>
                <img src={IconTime} />
                16.06 - 24.07.2026
              </div>
            </div>
            <img className={styles["accessible__card-image"]} src={ImageBlazingCoin} />
          </div>
          <button className={styles.accessible__button} onClick={(e) => {
            e.stopPropagation();
            setIsPause(true);
          }}>{t("tasks.get")}</button>
        </div>
      </section>
    </>
  )
}
