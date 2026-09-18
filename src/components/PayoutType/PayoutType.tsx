import React, {useRef, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {getLocalizedPath} from "@/i18n/routing";
import IconHelp from "@/assets/icons/help.svg";
import iconDeposit from "@/assets/icons/icon-deposit.svg";
import iconPayout from "@/assets/icons/icon-payout.svg";
import iconBalance from "@/assets/icons/icon-balance.svg";
import styles from "./PayoutType.module.css";
import { cardsPayout } from "@/shared/cardPayoutTypes"
import {useTranslation} from "react-i18next";

export const PayoutType: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [inputType, setInputType] = useState('text');
  const [value, setValue] = useState<string>();
  const inputRef = useRef<HTMLInputElement>(null);
  const moneyRef = useRef<HTMLSpanElement>(null);
  const { lang, payoutType } = useParams();
  const { t } = useTranslation();

  const card = cardsPayout.find((card) => {
    return card.type === payoutType
  });

  const handleButtonClick = (): void => {
    if (moneyRef.current) {
      const moneyText = moneyRef.current.innerText.replace(/\s/g, '');

      if (inputRef.current) {
        inputRef.current.value = moneyText;
      }

      setInputValue(moneyText);
    }
  };

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

      <div className={styles.pay__option}>
        <div className={styles["pay__option-item"]}>
          <img src={card?.logo} className={styles["pay__option-image"]} alt=""/>
          <span className={styles["pay__option-price"]}>{t("wallet.from")} {formatNum(card?.from)}</span>
        </div>
      </div>
      <div className={styles.pay__content}>
        <div className={styles.pay__sum}>
          <label className={styles.pay__label} htmlFor="pay__input-id">{t("wallet.amount")}: <p
            className={styles["pay__label-balance"]}>{t("wallet.balance")}: <span
            id="pay__sum-money">980 000.00</span> UZS
          </p></label>
          <div className={styles["pay__sum-input"]}>
            <input className={styles.pay__input} id="pay__input-id" type="number" min="50000"
                   placeholder="0" value={inputValue}
                   onChange={(e) => setInputValue(e.target.value)} ref={inputRef} required/>
            <button className={styles["pay__sum-button"]} onClick={handleButtonClick}>Max</button>
          </div>
          <span className={styles["pay__sum-error"]}>{t("wallet.minimum")} 50 000</span>
        </div>
        <div>
          <label className={styles.pay__label}>
            {t("wallet.cardNumber")}:
          </label>
          <input className={styles.pay__input} type="number" placeholder="Enter сard number" min="0"
                 required/>
          <span className={styles["pay__sum-error"]}>{t("wallet.invalidCard")}</span>
        </div>
        <div>
          <label className={styles.pay__label}>
            {t("wallet.cardholder")}:
          </label>
          <input className={styles.pay__input} type="text" placeholder="Enter сard owner" required/>
        </div>
        <div>
          <label className={styles.pay__label}>
            {t("wallet.monthYear")}:
          </label>
          <input
            className={`${styles.pay__input} ${styles.pay__date}`}
            type={inputType}
            placeholder="MM/YY"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setInputType('month')}
            onBlur={() => {
              if (value === '') setInputType('text');
            }}
            required
          />
        </div>
        <button className={styles.pay__button}>{t("wallet.withdrawFunds")}</button>
        <Link to={getLocalizedPath(lang, `/wallet/payout`)}
              className={styles["pay__button-change"]}>{t("wallet.changePayment")}</Link>
        <a href="" className={styles["pay__button-help"]}>
          {t("wallet.needHelp")}?
          <img src={IconHelp} alt=""/>
        </a>
      </div>
    </div>
  )
}
