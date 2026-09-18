import React, { useRef, RefObject } from "react";
import { UseClickOutside } from "../../Hooks/ClickOutside/UseClickOutside";

import CloseTransparent from "@/assets/icons/close-transparent.svg";
import IconTime from "@/assets/icons/icon-time-purpul.svg";
import IconCloseMenu from "@/assets/icons/close-menu.svg";

import styles from "./ConditionModal.module.css";
import {useTranslation} from "react-i18next";
import {CloseButtonModal} from "@/components/ui/CloseButtonModal/CloseButtonModal";

export const ConditionModal = ({
  openCondition,
  setOpenCondition,
  excludeRefs = [],
  } : {
  openCondition: boolean;
  setOpenCondition: (value: boolean) => void;
  excludeRefs?: RefObject<HTMLElement | null>[];
}) => {
  const { t } = useTranslation();
  const modalRef = useRef(null);

  UseClickOutside(
    modalRef,
    () => {
    setOpenCondition(false);
    },
    excludeRefs,
  );

  return (
    <div className={`${styles["conditions-modal"]} ${openCondition === true ? styles.active : ""}`}>
      <div className={styles["conditions-modal__background"]} ref={modalRef}>
        <div className={styles["conditions-modal__top"]}>
          <p className={styles["conditions-modal__title"]}>{t("welcomeBonus.conditions")}</p>
          <img src={CloseTransparent} id="closeConditions" width="11"alt="" loading="lazy"
          onClick={(e) => {e.stopPropagation(); setOpenCondition(false);}}
          />
        </div>
        <div className={styles["conditions-modal__time"]}>
          <img src={IconTime} alt="" loading="lazy"/>
          <p className={styles["conditions-modal__time-text"]}>16.06 - 24.07.2026</p>
        </div>
        <p className={styles["conditions-modal__subtitle"]}>
          {t("welcomeBonus.title")}
        </p>
        <div className={styles["conditions-modal__content"]}>
          <div className={styles["conditions-modal__content-grid"]}>
            <div className={styles["conditions-modal__item"]}>
              100 000 S
              <span className={styles["conditions-modal__text"]}>MAX {t("wallet.deposit")}</span>
            </div>
            <div className={styles["conditions-modal__item"]}>
              х35
              <span className={styles["conditions-modal__text"]}>Отыгрыш</span>
            </div>
            <div className={styles["conditions-modal__item"]}>
              60 000 S
              <span className={styles["conditions-modal__text"]}>MIN {t("wallet.deposit")}</span>
            </div>
            <div className={styles["conditions-modal__item"]}>
              100%
              <span className={styles["conditions-modal__text"]}>{t("welcomeBonus.percentageDeposit")}</span>
            </div>
          </div>
          <div className={styles["conditions-modal__item"]}>
            х10 {t("welcomeBonus.depositAmount")}
            <span className={styles["conditions-modal__text"]}>MAX WIN</span>
          </div>
        </div>
        <div className={styles["conditions-modal__buttons"]}>
          <button className={`${styles["conditions-modal__button"]} ${styles["conditions-modal__get"]}`}>{t("tasks.get")}</button>
          <button className={styles["conditions-modal__button"]}>{t("welcomeBonus.deleteBonus")}</button>
        </div>
      </div>
      <CloseButtonModal onClick={(e) => {e.stopPropagation(); setOpenCondition(false);}} />
    </div>
  );
};
