import React from "react";
import styles from "./DepositPage.module.css";

import {Link, useParams} from "react-router-dom";
import {getLocalizedPath} from "@/i18n/routing";
import iconDeposit from "@/assets/icons/icon-deposit.svg";
import iconPayout from "@/assets/icons/icon-payout.svg";
import iconBalance from "@/assets/icons/icon-balance.svg";
import { cardsDeposit } from "@/shared/cardPayoutTypes"
import {DepositBonus} from "@/components/DepositBonus/DepositBonus";
import {useTranslation} from "react-i18next";

export const DepositPage: React.FC = () => {
  const { lang } = useParams();
  const { t } = useTranslation();

  const formatNum = (num?: number) => {
    if (!num && num !== 0) return '';
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  return (
    <div className={styles.wallet}>
      <div className={styles.wallet__tabs}>
        <div className={`${styles.wallet__tab} ${styles["wallet__tab-active"]}`}>
          <img src={iconDeposit} className={styles["wallet__icon-deposit"]} alt=""/>
          {t("wallet.deposit")}
        </div>
        <Link to={getLocalizedPath(lang, `/wallet/payout`)} className={styles.wallet__tab}>
          <img src={iconPayout} className={styles["wallet__icon-pay"]} alt=""/>
          {t("wallet.payout")}
        </Link>
        <Link to={getLocalizedPath(lang, `/wallet/balance`)} className={styles.wallet__tab}>
          <img src={iconBalance} className={styles["wallet__icon-balance"]} alt=""/>
          {t("wallet.balance")}
        </Link>
      </div>
      <DepositBonus />
      <div className={styles["deposit__title"]}>
        {t("wallet.replenishment")}
      </div>
      <div className={styles.deposit__content}>
        {cardsDeposit.map((card, index) => (
          <Link to={getLocalizedPath(lang, card.link)} key={index} className={styles.deposit__item}>
            <p className={styles["deposit__item-title"]}>
              {card.title}
            </p>
            <img src={card.logo} className="deposit__item-image" alt=""/>
            <span className={styles["deposit__item-price"]}>
              {t("wallet.from")} {formatNum(card.from)} UZS
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
