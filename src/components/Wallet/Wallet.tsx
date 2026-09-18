import styles from './Wallet.module.css'

import IconCoin from "@/assets/icons/uzs-coin.svg";
import IconCoinPaw from "@/assets/icons/coin-paw.svg";
import IconDeposit from "@/assets/icons/icon-deposit.svg";
import IconPayout from "@/assets/icons/icon-payout.svg";
import {useTranslation} from "react-i18next";
import {Link, useParams} from "react-router-dom";
import {getLocalizedPath} from "@/i18n/routing";

export const Wallet = () => {
  const { t } = useTranslation();
  const { lang } = useParams();

  return (
    <div className={styles.about}>
      <div className={styles.wallet}>
        <div className={styles["wallet__title"]}>{t("sections.wallet")}</div>
        <span className={styles["wallet__info"]}>{t("wallet.mainBalance")}</span>
        <div className={styles["wallet__money"]}>
          <img src={IconCoin} alt="" loading="lazy"/>
          980 000 UZS
        </div>
        <div className={styles["wallet__bottom"]}>
          <div>
            <span className={styles["wallet__info"]}>{t("wallet.bonusBalance")}</span>
            <div className={styles["wallet__money"]}>
              <img src={IconCoin} alt="" loading="lazy"/>
              10 000 UZS
            </div>
          </div>
          <div>
            <span className={styles["wallet__info"]}>{t("wallet.coins")}</span>
            <div className={styles["wallet__money"]}>
              <img src={IconCoinPaw} alt="" loading="lazy"/>
              100 PC
            </div>
          </div>
        </div>
        <div className={styles["wallet__buttons"]}>
          <Link to={getLocalizedPath(lang, "/wallet/deposit")} className={styles["wallet__button"]}>
            <img src={IconDeposit} alt=""/>
            {t("wallet.deposit")}
          </Link>
          <Link to={getLocalizedPath(lang, "/wallet/payout")} className={styles["wallet__button"]}>
            <img src={IconPayout} alt=""/>
            {t("wallet.payout")}
          </Link>
        </div>
      </div>
    </div>
  )
}
