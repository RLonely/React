import styles from './User.module.css';

import IconAvatar from "@/assets/icons/avatar.png";
import IconCopy from "@/assets/icons/icon-copy.svg";
import {useTranslation} from "react-i18next";

export const User = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.user}>
      <div className={styles.user__info}>
        <img className={styles["user__info-image"]} src={IconAvatar} alt="avatar"
             loading="lazy"/>
        <div className={styles["user__info-text"]}>
          <p className={styles["user__info-name"]}>{t("profile.userLogin")}</p>
          <p className={styles["user__info-id"]}>
            ID<span id="id-num">123456789</span>
            <img id="info-id__image" src={IconCopy} alt="" loading="lazy"/>
          </p>
        </div>
      </div>
      <div className={styles["user__mid"]}>
        <div>
          <span className={styles["user__mid-title"]}>{t("profile.currentLevel")}</span>
          <p className={styles["user__mid-name"]}>Котик</p>
        </div>
        <div>
          <span className={styles["user__mid-title"]}>{t("profile.cashback")}</span>
          <p className={styles.cashback__percent}>10% + 0%</p>
        </div>
      </div>
      <div>
        <div className={styles["user__experience-top"]}>
          <div className={styles.experience__text}>{t("profile.vipProgress")}</div>
          <div className={styles.experience__text}>2%</div>
        </div>
        <div className={styles["experience__progress-bar"]}>
          <span className={styles["progress-bar__line"]}></span>
        </div>
        <div className={styles.experience__bottom}>
          <span className={styles.experience__rank}>{t("profile.nextRank")}:</span>
          <p className={styles["experience__rank-name"]}>Злой котик</p>
          <div className={styles.experience__image}></div>
        </div>
      </div>
    </div>
  )
}
