import styles from "./TasksModal.module.css";
import {useTranslation} from "react-i18next";

import {CloseButtonModal} from "@/components/ui/CloseButtonModal/CloseButtonModal";

export const TasksModal = ({
  openTasks,
  setOpenTasks,
  } : {
  openTasks: boolean;
  setOpenTasks: (value: boolean) => void;
}) => {
  const { t } = useTranslation();

  return (
    <>
      <div className={`${styles["tasks-modal"]} ${openTasks === true ? styles.active : ""}`}>
        <div className={styles["tasks-modal__background"]}>
          <div className={styles["tasks-modal__title"]}>ЗАДАНИЯ</div>
          <p className={styles["tasks-modal__text"]}>
            Заходите каждый день, выполняйте задания и получайте ценные призы:
            фриспины, уменьшение вейджера в бонусе, Pussycoins (PSC),
            предметы инвентаря и многое другое!
          </p>
          <p className={styles["tasks-modal__text"]}>
            У каждого игрока ежедневно появляются индивидуальные
            задания и вознаграждение за их выполнение!
          </p>
          <div className={styles["tasks-modal__subtitle"]}>Условия</div>
          <ul className={styles["tasks-modal__list"]}>
            <li className={styles["tasks-modal__text"]}>
              Выполняя задания, вы можете
              открывать достижения и получать
              дополнительные призы.
            </li>
            <li className={styles["tasks-modal__text"]}>
              Каждые 24 часа задания
              обновляются.
            </li>
            <li className={styles["tasks-modal__text"]}>
              Прогресс выполнения заданий
              отображается на самом задании.
            </li>
            <li className={styles["tasks-modal__text"]}>
              Нажав на плитку задания, можно
              перейти сразу к его выполнению и
              получить бонус.
            </li>
            <li className={styles["tasks-modal__text"]}>
              Чтобы забрать награду после
              выполнения задания, нужно нажать
              на кнопку «Забрать», иначе приз не
              будет получен.
            </li>
            <li className={styles["tasks-modal__text"]}>
              После того как вы забрали награду,
              она появится в разделе "Инвентарь".
            </li>
          </ul>
          <div className={styles["tasks-modal__title"]}>ЕЖЕДНЕВНЫЙ ВХОД</div>
          <p className={styles["tasks-modal__text"]}>
            Ежедневные задания, за выполнение
            каждого из которых вы получаете приз!
          </p>
          <p className={styles["tasks-modal__text"]}>
            За выполнение всех ежедневных
            заданий вы можете получить фриспины,
            PSC, купон на снижение вейджера и
            ещё много ценных призов!
          </p>
          <div className={styles["tasks-modal__subtitle"]}>Условия</div>
          <ul className={styles["tasks-modal__list"]}>
            <li className={styles["tasks-modal__text"]}>
              Каждые 24 часа таймер
              обновляется.
            </li>
            <li className={styles["tasks-modal__text"]}>
              Чем больше дней подряд вы
              заходите, тем ценнее становятся
              призы, которые вы получаете.
            </li>
            <li className={styles["tasks-modal__text"]}>
              Чтобы забрать награду после входа,
              нужно нажать на кнопку «Забрать».
            </li>
            <li className={styles["tasks-modal__text"]}>
              Чтобы получить награду за 7 дней,
              нужно заходить 7 дней подряд. Если
              цикл будет прерван, вы начнете с
              первого дня.
            </li>
            <li className={styles["tasks-modal__text"]}>
              После выполнения 7-дневного
              непрерывного входа, задания
              обновятся, и вы начнете с первого
              дня.
            </li>
          </ul>
        </div>
        <CloseButtonModal onClick={(e) => {e.stopPropagation(); setOpenTasks(false);}}/>
      </div>
    </>
  )
}
