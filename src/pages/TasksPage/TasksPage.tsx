import {ButtonBack} from "@/components/ui/ButtonBack/ButtonBack";

import styles from './TasksPage.module.css';
import {TasksTabs} from "@/components/TasksTabs/TasksTabs";
import {useTranslation} from "react-i18next";

import IconInfo from "@/assets/icons/icon-info-gray.svg";
import {useContext} from "react";
import {TasksContext} from "@/Context/TasksContext";

export const TasksPage: React.FC = () => {
  const { t } = useTranslation();
  const { setIsTasksModal } = useContext(TasksContext);

  return (
    <div className={styles.tasks}>
      <div className={styles.tasks__row}>
        <ButtonBack to="/">{t("sections.tasks")}</ButtonBack>
        <button className={styles.tasks__button} onClick={(e) => {
          e.stopPropagation();
          setIsTasksModal(true);
        }}>
          <img src={IconInfo} alt="" />
        </button>
      </div>
      <TasksTabs />
    </div>
  )
}
