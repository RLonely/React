import { useState, useRef, useContext } from "react";
import { useTranslation } from "react-i18next";

import { UseClickOutside } from "../Hooks/ClickOutside/UseClickOutside";

import styles from "./SearchGame.module.css";

import Glass from "@/assets/icons/find-glass.svg";
import SettingIcon from "@/assets/icons/setting.svg";
import { Button } from "@/components/ui/Button/Button";
import { TasksContext } from "@/Context/TasksContext";

export const SearchGame = () => {
  const { setIsProviders } = useContext(TasksContext);
  const [active, setActive] = useState(false);
  const { t } = useTranslation();
  const inputRef = useRef(null);
  UseClickOutside(inputRef, () => {
    setActive(false);
  });

  return (
    <div className={styles.searchGame}>
      <div className={styles.searchGame__input}>
        <input
          id="search-action"
          type="search"
          placeholder={t("common.searchGamePlaceholder")}
          onClick={() => setActive(true)}
          ref={inputRef}
        />
        <img id="find-swap" src={Glass} className={styles.glass} alt="Glass" loading="lazy" />
      </div>
      <Button
        onClick={(e) => {
          e.stopPropagation();
          setIsProviders(true);
        }}
        className={`${styles.searchGame__button} ${active === true ? styles["searchGame__button-active"] : ""}`}
        variant="primary"
        style={{ height: 40, padding: 10 }}
      >
        <img src={SettingIcon} alt="SettingIcon" loading="lazy" />
        <p>{t("sections.providers")}</p>
      </Button>
    </div>
  );
};
