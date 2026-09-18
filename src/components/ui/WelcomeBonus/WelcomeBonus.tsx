import { useState } from "react";
import { useTranslation } from "react-i18next";

import styles from "./WelcomeBonus.module.css";

import More from "@/assets/icons/more.svg";
import Image from "@/assets/icons/plug.jpeg";

const welcomeBonusActions = ["apply", "cancel"] as const;

export const WelcomeBonus = () => {
  const { t } = useTranslation();
  const [selectedAction, setSelectedAction] =
    useState<(typeof welcomeBonusActions)[number]>("apply");

  return (
    <div className={styles.welcome}>
      <img className={styles.welcome__image} src={Image} alt="" loading="lazy" />

      <div className={styles.welcome__more}>
        <img src={More} alt={t("welcomeBonus.more")} loading="lazy" />
      </div>

      <div className={styles.welcome__text}>
        <div className={styles.welcome__title}>{t("welcomeBonus.title")}</div>
        <div className={styles.welcome__desc}>{t("welcomeBonus.description")}</div>
      </div>

      <div className={styles["welcome-buttons"]}>
        {welcomeBonusActions.map((action) => (
          <button
            key={action}
            type="button"
            onClick={() => setSelectedAction(action)}
            className={`${styles.welcome__button} ${
              selectedAction === action ? styles["welcome__button-active"] : ""
            }`}
          >
            {t(`welcomeBonus.${action}`)}
          </button>
        ))}
      </div>
    </div>
  );
};
