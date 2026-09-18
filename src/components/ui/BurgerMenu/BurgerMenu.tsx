import styles from "./BurgerMenu.module.css";
import React, {RefObject, useRef} from "react";
import {UseClickOutside} from "@/components/Hooks/ClickOutside/UseClickOutside";
import {Link, useParams} from 'react-router-dom';

import Avatar from "@/assets/icons/avatar.png";
import RightPurple from "@/assets/icons/right-purple.svg";
import IconCopy from "@/assets/icons/icon-copy.svg";
import IconPromo from "@/assets/icons/menu/icon-promo.svg";
import IconBonus from "@/assets/icons/menu/icon-bonus.svg";
import IconVIP from "@/assets/icons/menu/icon-vip.svg";
import IconFame from "@/assets/icons/menu/icon-fame.svg";
import IconTournament from "@/assets/icons/menu/icon-tournament.svg";
import IconWheel from "@/assets/icons/menu/icon-wheel.png";
import IconTasks from "@/assets/icons/menu/icon-tasks.png";
import IconShop from "@/assets/icons/menu/icon-shop.png";
import IconSlotmachine from "@/assets/icons/menu/icon-slotmachine.png";
import IconSlot from "@/assets/icons/menu/icon-slot.svg";
import IconCrash from "@/assets/icons/menu/icon-crash.svg";
import IconLive from "@/assets/icons/menu/icon-live.svg";
import IconTvbet from "@/assets/icons/menu/icon-tvbet.svg";
import IconVR from "@/assets/icons/menu/icon-vr.svg";
import IconTable from "@/assets/icons/menu/icon-table.svg";
import IconReferal from "@/assets/icons/menu/icon-referal.svg";
import IconPartner from "@/assets/icons/menu/icon-partner.svg";
import IconAndroid from "@/assets/icons/menu/logo-android.png";
import CloseMenu from "@/assets/icons/close-menu.svg";
import {getLocalizedPath} from "@/i18n/routing";
import {useTranslation} from "react-i18next";
import {CloseButtonModal} from "@/components/ui/CloseButtonModal/CloseButtonModal";

export const BurgerMenu = ({
  openMenu,
  setOpenMenu,
  excludeRefs = [],
  } : {
  openMenu: boolean;
  setOpenMenu: (value: boolean) => void;
  excludeRefs?: RefObject<HTMLElement | null>[];
}) => {
  const modalRef = useRef(null);
  const { lang } = useParams();
  const { t } = useTranslation();

  UseClickOutside(
    modalRef,
    () => {
      setOpenMenu(false);
    },
    excludeRefs,
  );

  const handleCloseBurger = () => {
    setOpenMenu(false);
  }

  return (
    <div className={`${styles.menu} ${openMenu === true ? styles.active : ""}`}>
      <div className={styles.menu__background} ref={modalRef}>
        <div className={styles.menu__content}>
          <div className={styles.menu__person}>
            <div className={styles.menu__avatar}>
              <img className={styles.burger__avatar} src={Avatar} loading="lazy"/>
            </div>
            <Link to={getLocalizedPath(lang, `/profile`)} className={styles["menu__profile"]} onClick={handleCloseBurger}>
              {t("profile.profile")}
              <img src={RightPurple} alt="" loading="lazy"/>
            </Link>
            <p className={styles.menu__id}>
              ID 123456789
              <img src={IconCopy} alt="" loading="lazy"/>
            </p>
          </div>
          <div className={styles.menu__category}>
            <Link to={getLocalizedPath(lang, ``)}
               className={`${styles["menu__category-item"]} ${styles["menu__category-promo"]}`}>
              <img src={IconPromo} alt="" loading="lazy"/>
              {t("common.promo")}
            </Link>
            <Link to={getLocalizedPath(lang, ``)} className={`${styles["menu__category-item"]} ${styles["menu__category-bonus"]}`}>
              <img src={IconBonus} alt="" loading="lazy"/>
              {t("common.bonus")}
            </Link>
            <Link to={getLocalizedPath(lang, ``)} className={`${styles["menu__category-item"]} ${styles["menu__category-vip"]}`}>
              <img src={IconVIP} alt="" loading="lazy"/>
              VIP
            </Link>
          </div>
          <div className={styles["menu__category"]}>
            <Link to={getLocalizedPath(lang, `/fame`)} className={styles["menu__category-item"]} onClick={handleCloseBurger}>
              <img src={IconFame} alt="" loading="lazy"/>
              {t("sections.hallOfFame")}
            </Link>
            <Link to={getLocalizedPath(lang, ``)} className={styles["menu__category-item"]}>
              <img src={IconTournament} alt="" loading="lazy"/>
              {t("sections.tournament")}
            </Link>
          </div>
          <div className={`${styles["menu__category"]} ${styles["menu__block-three"]}`}>
            <Link to={getLocalizedPath(lang, ``)} className={styles["menu__row-item"]}>
              <img src={IconWheel} alt="" loading="lazy"/>
              {t("sections.wheel")}
            </Link>
            <Link to={getLocalizedPath(lang, `/tasks`)} className={styles["menu__row-item"]} onClick={handleCloseBurger}>
              <img src={IconTasks} alt="" loading="lazy"/>
              {t("sections.tasks")}
            </Link>
            <Link to={getLocalizedPath(lang, ``)} className={styles["menu__row-item"]}>
              <img src={IconShop} alt="" loading="lazy"/>
              {t("sections.shop")}
            </Link>
            <Link to={getLocalizedPath(lang, ``)} className={styles["menu__row-item"]}>
              <img src={IconSlotmachine} alt="" loading="lazy"/>
              {t("sections.slotMachine")}
            </Link>
          </div>
          <div className={styles["menu__games"]}>
            <Link to={getLocalizedPath(lang, ``)} className={styles["menu__game"]}>
              <img src={IconSlot} alt="" loading="lazy"/>
              {t("sections.slots")}
            </Link>
            <Link to={getLocalizedPath(lang, ``)} className={styles["menu__game"]}>
              <img src={IconCrash} alt="" loading="lazy"/>
              Crash Games
            </Link>
            <Link to={getLocalizedPath(lang, ``)} className={styles["menu__game"]}>
              <img src={IconLive} alt="" loading="lazy"/>
              {t("categories.liveGames")}
            </Link>
            <Link to={getLocalizedPath(lang, ``)} className={styles["menu__game"]}>
              <img src={IconTvbet} alt="" loading="lazy"/>
              Game Show
            </Link>
            <Link to={getLocalizedPath(lang, ``)} className={styles["menu__game"]}>
              <img src={IconVR} alt="" loading="lazy"/>
              VR Спорт
            </Link>
            <Link to={getLocalizedPath(lang, ``)} className={styles["menu__game"]}>
              <img src={IconTable} alt="" loading="lazy"/>
              Настольные
            </Link>
          </div>
          <div className={styles["menu__supports"]}>
            <Link to={getLocalizedPath(lang, ``)} className={styles["menu__supports-item"]}>
              <img src={IconReferal} alt="" loading="lazy"/>
              {t("sections.referral")}
            </Link>
            <Link to={getLocalizedPath(lang, ``)} className={styles["menu__supports-item"]}>
              <img src={IconPartner} alt="" loading="lazy"/>
              {t("footer.partners")}
            </Link>
          </div>
          <div className={styles["menu__bottom"]}>
            <button className={`${styles["menu__bottom-item"]} ${styles["menu__language"]}`}>
              RU
            </button>
            <button className={`${styles["menu__bottom-item"]} ${styles["menu__download"]}`}>
              <img src={IconAndroid} alt="" loading="lazy"/>
              {t("footer.downloadApp")}
            </button>
          </div>
        </div>
      </div>
      <CloseButtonModal onClick={(e) => {e.stopPropagation(); setOpenMenu(false);}} />
    </div>
  );
};
