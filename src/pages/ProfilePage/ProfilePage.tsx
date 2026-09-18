import styles from './ProfilePage.module.css'

import IconClose from '@/assets/icons/close-transparent.svg'
import IconAvatar from '@/assets/icons/avatar.png'
import IconCopy from '@/assets/icons/icon-copy.svg'
import IconAbout from '@/assets/icons/icon-about.svg'
import IconBonus from '@/assets/icons/icon-bonus.svg'
import IconCurrency from '@/assets/icons/icon-currency.svg'
import IconSettings from '@/assets/icons/icon-settings.svg'
import IconPromoCode from '@/assets/icons/icon-promocode.svg'
import IconExit from '@/assets/icons/icon-exit.svg'
import React from "react";
import {Link, useParams} from "react-router-dom";
import {getLocalizedPath} from "@/i18n/routing";
import {useTranslation} from "react-i18next";

export const ProfilePage: React.FC = () => {
  const { lang } = useParams();
  const { t } = useTranslation();

  return (
    <div className={styles.profile}>
      <Link to={getLocalizedPath(lang, `/`)} className={styles.profile__close}>
        <img src={IconClose} alt="close" loading="lazy"/>
      </Link>
      <div className={styles.profile__info}>
        <img className={styles["profile__info-image"]} src={IconAvatar} alt="avatar" loading="lazy"/>
        <div className={styles["profile__info-text"]}>
          <p className={styles["profile__info-name"]}>User Login</p>
          <p className={styles["profile__info-id"]}>
            ID<span id="profile__id-num">123456789</span>
            <img id="info-id__image" src={IconCopy} alt="" loading="lazy"/>
          </p>
        </div>
      </div>
      <div className={styles.profile__list}>
        <Link to={getLocalizedPath(lang, `/profile-about`)} className={styles["profile__list-link"]}>
          <img src={IconAbout} alt="" loading="lazy"/>
          {t("profile.aboutAccount")}
        </Link>
        <Link to={getLocalizedPath(lang, `/profile-bonuses`)} className={styles["profile__list-link"]}>
          <img src={IconBonus} alt="" loading="lazy"/>
          {t("common.bonus")}
        </Link>
        <Link to={getLocalizedPath(lang, `/profile-wallet`)} className={styles["profile__list-link"]}>
          <img src={IconCurrency} alt="" loading="lazy"/>
          {t("sections.wallet")}
        </Link>
        <Link to={getLocalizedPath(lang, `/profile-setting`)} className={styles["profile__list-link"]}>
          <img src={IconSettings} alt="" loading="lazy"/>
          {t("profile.setting")}
        </Link>
      </div>
      <div className={styles.profile__buttons}>
        <button className={styles["profile__buttons-btn"]}>
          <img src={IconPromoCode} alt="" loading="lazy"/>
          {t("profile.promoCode")}
        </button>
        <button className={`${styles["profile__buttons-btn"]} ${styles["profile__buttons-exit"]}`}>
          {t("profile.exit")}
          <img src={IconExit} alt="" loading="lazy"/>
        </button>
      </div>
    </div>
  )
}
