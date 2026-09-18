import { useTranslation } from "react-i18next";

import styles from "./NavigationAuthorized.module.css";

import Bonuses from "@/assets/icons/bonuses.svg";
import Menu from "@/assets/icons/menu.svg";
import Find from "@/assets/icons/find.svg";
import Game from "@/assets/icons/game.svg";
import Support from "@/assets/icons/support.svg";
import { useContext } from "react";
import { TasksContext } from "@/Context/TasksContext";
import {Button} from "@/components/ui/Button/Button";

export const NavigationAuthorized = () => {
  const { setIsMenu } = useContext(TasksContext);
  const { t } = useTranslation();

  return (
    <nav className={styles.navigation}>
      <div className={styles.navigation__button}>
        {t("common.games")}
        <img src={Game} alt="Game" loading="lazy" />
      </div>
      <div className={styles.navigation__button}>
        {t("common.bonus")}
        <img src={Bonuses} alt="Bonuses" loading="lazy" />
      </div>
      <Button className={styles.navigation__menu} onClick={(e) => {
        e.stopPropagation();
        setIsMenu(true);
      }}>
        <img src={Menu} alt="Menu" loading="lazy" />
      </Button>
      <div className={styles.navigation__button}>
        {t("common.search")}
        <img src={Find} alt="Find" loading="lazy" />
      </div>
      <div className={styles.navigation__button}>
        {t("common.support")}
        <img src={Support} alt="Support" loading="lazy" />
      </div>
    </nav>
  );
};
