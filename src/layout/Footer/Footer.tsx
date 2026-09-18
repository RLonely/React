import { useTranslation } from "react-i18next";

import styles from "./Footer.module.css";

import Facebook from "@/assets/icons/social/facebook.svg";
import Instagram from "@/assets/icons/social/instargam.svg";
import Telegram from "@/assets/icons/social/telegram.svg";
import X from "@/assets/icons/social/x.svg";
import { Providers } from "@/components/Providers/Providers";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className={styles["footer-logo"]}>
        <div>
          LOGO
        </div>
        <div className={styles["footer-logo__line"]}></div>
        {/*<span>*/}
        {/*  {t("footer.sloganLine1")} <br />*/}
        {/*  {t("footer.sloganLine2")}*/}
        {/*</span>*/}
      </div>
      <div className={styles["footer-content"]}>
        <div className={styles["footer-col"]}>
          <h4 className={styles["footer-title"]}>{t("common.Games")}</h4>
          <a href="">{t("common.slots")}</a>
          <a href="">{t("common.gameShows")}</a>
          <a href="">{t("categories.roulette")}</a>

          <h4 className={`${styles["footer-title"]} ${styles["footer-space"]}`}>
            {t("footer.aboutUs")}
          </h4>
          <a href="">{t("footer.privacyPolicy")}</a>
          <a href="">{t("footer.terms")}</a>
          <a href="">{t("footer.partners")}</a>
        </div>

        <div className={styles["footer-col"]}>
          <h4 className={styles["footer-title"]}>{t("common.support")}</h4>
          <a href="">{t("footer.liveSupport")}</a>
          <a href="">{t("footer.helpCenter")}</a>
          <a href="">{t("footer.responsibleGaming")}</a>

          <div className={`${styles["footer-social"]} ${styles["footer-space"]}`}>
            <a href="">
              <img src={Telegram} alt="Telegram" loading="lazy" />
            </a>
            {/*<a href="">*/}
            {/*  <img src={X} alt="X" loading="lazy" />*/}
            {/*</a>*/}
            {/*<a href="">*/}
            {/*  <img src={Instagram} alt="Instagram" loading="lazy" />*/}
            {/*</a>*/}
            {/*<a href="">*/}
            {/*  <img src={Facebook} alt="Facebook" loading="lazy" />*/}
            {/*</a>*/}
          </div>
        </div>
      </div>
      <Providers />
    </footer>
  );
};
