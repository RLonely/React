import React, {useState} from "react";

import IconHelp from "@/assets/icons/help.svg";
import {useParams} from "react-router-dom";
import {getLocalizedPath} from "@/i18n/routing";
import {cardsDeposit} from "@/shared/cardPayoutTypes"
import {ButtonBack} from "@/components/ui/ButtonBack/ButtonBack";

import styles from "./DepositType.module.css";
import {DepositBonus} from "@/components/DepositBonus/DepositBonus";
import {useTranslation} from "react-i18next";
import {Tasks} from "@/components/Tasks/Tasks";
import {DailyEntry} from "@/components/DailyEntry/DailyEntry";

export const DepositType = () => {
  const { lang, depositType } = useParams();
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState<string>('')
  const [activeMoney, setActiveMoney] = useState(-1)

  const handlePriceClick = (price: number) => {
    setInputValue(price.toString());
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const card = cardsDeposit.find((card) => {
    return card.type === depositType
  });

  const formatNum = (num?: number) => {
    if (!num && num !== 0) return '';
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  const moneyOptions = [
    {
      money: 60000,
    },
    {
      money: 200000,
    },
    {
      money: 2900000,
    },
    {
      money: 33915000,
    },
  ];

  return (
    <>
      <section className={styles.depositCard}>
        <ButtonBack to={getLocalizedPath(lang, "/wallet/deposit")}>{t("wallet.chooseMethod")}</ButtonBack>
        <DepositBonus />
        <div className={styles.depositCard__item}>
          <p className={styles["depositCard__item-title"]}>{card?.title}</p>
          <img src={card?.logo} className="deposit__item-image" alt="" />
          <span className={styles["depositCard__item-price"]}>{formatNum(card?.from)} - 33 915 000</span>
        </div>
        <div className={styles.depositCard__sum}>
          <label className={styles["depositCard__input-title"]}>
            {t("wallet.amount")}:
          </label>
          <input min="60000"
                 max="33915000"
                 className={styles.depositCard__input}
                 type="number"
                 placeholder="200000"
                 value={inputValue}
                 onChange={handleInputChange}
                 required
          />
          <span className={styles["depositCard___sum-error"]}>{t("wallet.specifyAmount")}</span>
          <div className={styles["depositCard__sum-select"]}>
            {moneyOptions.map((moneyOption, index) => (
              <span
                onClick={() => {handlePriceClick(moneyOption.money); setActiveMoney(index)}}
                className={`${styles["depositCard__sum-money"]} ${activeMoney === index ? styles.active : ''}`}
                key={index}
              >
                  {formatNum(moneyOption.money)}
                </span>
            ))}
          </div>
        </div>
        <button className={styles.depositCard__button}>{t("wallet.topUp")}</button>
        <div className={styles["depositCard__button-help"]}>
          {t("wallet.needHelp")}?
          <img src={IconHelp} alt="" />
        </div>
      </section>
    </>
  )
}
