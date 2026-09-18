import styles from './Fame.module.css';

import ImageFame from "@/assets/icons/plug.jpeg";
import {Ratings} from "@/components/Ratings/Ratings";
import {useTranslation} from "react-i18next";

export const Fame = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.fame__banner}>
        <img className={styles["fame__banner-image"]} src={ImageFame} alt="" loading="lazy"/>
      </div>

      <div className={styles.fame__title}>{t("profile.fameTitle")}:</div>

      <Ratings />
    </>
  )
}
