import React, { useRef, RefObject } from "react";
import { UseClickOutside } from "../../Hooks/ClickOutside/UseClickOutside";

import CloseTransparent from "@/assets/icons/close-transparent.svg";
import ImageGift from "@/assets/images/gift-to-gift.png";

import styles from "./PauseBonusModal.module.css";
import {Button} from "@/components/ui/Button/Button";
import {useTranslation} from "react-i18next";

export const PauseBonusModal = ({
  openPause,
  setOpenPause,
  excludeRefs = [],
  } : {
  openPause: boolean;
  setOpenPause: (value: boolean) => void;
  excludeRefs?: RefObject<HTMLElement | null>[];
}) => {
  const modalRef = useRef(null);
  const { t } = useTranslation();

  UseClickOutside(
    modalRef,
    () => {
      setOpenPause(false);
    },
    excludeRefs,
  );

  return (
    <div className={`${styles["pause-modal"]} ${openPause === true ? styles.active : ""}`}>
      <div className={styles["pause-modal__background"]} ref={modalRef}>
        <div className={styles["pause__modal-close"]} onClick={(e) => {
          e.stopPropagation();
          setOpenPause(false);
        }}>
          <img src={CloseTransparent} alt="close"/>
        </div>
        <p className={styles["pause__modal-title"]}>
          {t("welcomeBonus.pauseModalTitle")}
        </p>
        <img src={ImageGift} alt=""/>
        <span className={styles["pause__modal-desc"]}>
          {t("welcomeBonus.pauseModalDesc")}
      </span>
        <div className={styles["pause__modal-buttons"]}>
          <Button className={`${styles["pause__modal-button"]} ${styles["pause__modal-yes"]}`}>{t("welcomeBonus.yes")}</Button>
          <Button className={`${styles["pause__modal-button"]} ${styles["pause__modal-no"]}`} onClick={(e) => {
            e.stopPropagation();
            setOpenPause(false);
          }}>{t("welcomeBonus.no")}</Button>
        </div>
      </div>
    </div>
  );
};
