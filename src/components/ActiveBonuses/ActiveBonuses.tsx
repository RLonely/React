import styles from "./ActiveBonuses.module.css";

import IconExclamation from "@/assets/icons/icon-exclamation.svg";
import ImageBonuses from "@/assets/icons/plug.jpeg";
import {useContext} from "react";
import {TasksContext} from "@/Context/TasksContext";
import {useTranslation} from "react-i18next";

export const ActiveBonuses = () => {
  const { setIsCondition } = useContext(TasksContext);
  const { t } = useTranslation();

  return (
    <>
      <section className={styles.bonuses__welcome}>
        <div className={styles["bonuses__welcome-top"]}>
          <div className={styles.bonuses__progress}>
            <p className={styles["bonuses__welcome-title"]}>{t("welcomeBonus.wagering")} 2 000 000 UZS</p>
            <div className={styles.bonuses__line}>
            </div>
          </div>
          <img id="conditionsBtn" src={IconExclamation} onClick={(e) => {
            e.stopPropagation();
            setIsCondition(true);
          }}/>
        </div>
        <div className={styles["bonuses__welcome-row"]}>
          <div className={styles.bonuses__text}>
            <p className={styles["bonuses__text-title"]}>{t("welcomeBonus.title")}</p>
            <span className={styles["bonuses__text-desc"]}>300% + 300 FS</span>
            <div className={styles.bonuses__timer} id="bonusesTimer">
              <span className={styles["bonuses__timer-item"]} id="bonusesDays">00</span>:
              <span className={styles["bonuses__timer-item"]} id="bonusesHours">00</span>:
              <span className={styles["bonuses__timer-item"]} id="bonusesMinutes">00</span>:
              <span className={styles["bonuses__timer-item"]} id="bonusesSeconds">00</span>
            </div>
          </div>
          <img className={styles["bonuses__welcome-image"]} src={ImageBonuses}/>
        </div>
        <button className={styles.bonuses__button}>{t("games.play")}</button>
      </section>
    </>
  )
}
