import React from "react";
import iconDeposit from "@/assets/icons/icon-deposit.svg";
import {Link, useParams} from "react-router-dom";
import {getLocalizedPath} from "@/i18n/routing";
import iconPayout from "@/assets/icons/icon-payout.svg";
import iconBalance from "@/assets/icons/icon-balance.svg";
import styles from "./PayoutPage.module.css";
import { cardsPayout } from "@/shared/cardPayoutTypes"
import {useTranslation} from "react-i18next";

export const PayoutPage: React.FC = () => {
  const { lang } = useParams();
  const { t } = useTranslation();

  const formatNum = (num?: number) => {
    if (!num && num !== 0) return '';
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  return (
    <div className={styles.wallet}>
      <div className={styles.wallet__tabs}>
        <Link to={getLocalizedPath(lang, `/wallet/deposit`)} className={styles.wallet__tab}>
          <img src={iconDeposit} className={styles["wallet__icon-deposit"]} alt=""/>
          {t("wallet.deposit")}
        </Link>
        <div className={`${styles.wallet__tab} ${styles["wallet__tab-active"]}`}>
          <img src={iconPayout} className={styles["wallet__icon-pay"]} alt=""/>
          {t("wallet.payout")}
        </div>
        <Link to={getLocalizedPath(lang, `/wallet/balance`)} className={styles.wallet__tab}>
          <img src={iconBalance} className={styles["wallet__icon-balance"]} alt=""/>
          {t("wallet.balance")}
        </Link>
      </div>

      <div className={styles.pay__sum}>
        <label className={styles.pay__label} htmlFor="pay__input-id">{t("wallet.amount")}: <p className={styles.pay__row}>{t("wallet.balance")}: <span
          id="pay__sum-money">980 000.00</span> UZS</p></label>
        <div className={styles["pay__sum-input"]}>
          <input className={styles.pay__input} id="pay__input-id" type="number" min="50000" placeholder="0" required/>
          <button className={styles["pay__sum-button"]}>Max</button>
        </div>
        <span className={styles["pay__sum-error"]}>{t("wallet.minimum")} 50 000</span>
      </div>

      <div className={styles.pay__note}>
        {t("wallet.payNoteText")} <br/>
        15 200 USZ {t("wallet.payNoteBets")}
      </div>

      <div className={styles.pay__option}>
        {cardsPayout.map((card, index) => (
          <Link to={getLocalizedPath(lang, card.link)} key={index} className={styles["pay__option-item"]}>
            <img src={card.logo} className={styles["pay__option-image"]} alt=""/>
            <span className={styles["pay__option-from"]}>
              {t("wallet.from")} {formatNum(card.from)}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
