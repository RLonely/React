import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { TasksContext } from "@/Context/TasksContext";

import styles from "./NavigationUnauthorized.module.css";

import Menu from "@/assets/icons/menu.svg";
import { getLocalizedPath } from "@/i18n/routing";
import {useContext} from "react";
import {Button} from "@/components/ui/Button/Button";

export const NavigationUnauthorized = () => {
  const { setIsMenu } = useContext(TasksContext);
  const { t } = useTranslation();
  const { lang } = useParams();

  return (
    <nav className={styles.navigation}>
      <Link
        className={`${styles.navigation__btn} ${styles["navigation__btn-login"]}`}
        to={getLocalizedPath(lang, "/login")}
      >
        {t("common.login")}
      </Link>

      <Button className={styles.navigation__menu} onClick={(e) => {
        e.stopPropagation();
        setIsMenu(true);
      }}>
        <img src={Menu} alt="Menu" loading="lazy" />
      </Button>

      <Link
        className={`${styles.navigation__btn} ${styles["navigation__btn-registration"]}`}
        to={getLocalizedPath(lang, "/registration")}
      >
        {t("common.registration")}
      </Link>
    </nav>
  );
};
