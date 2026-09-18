import styles from "./CloseButtonModal.module.css";
import IconCloseMenu from "@/assets/icons/close-menu.svg";
import React from "react";


export const CloseButtonModal = ({onClick} : {onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;}) => {

  return (
    <button className={styles.modal__close} onClick={onClick}>
      <img src={IconCloseMenu} alt="" loading="lazy"/>
    </button>
  )
}
