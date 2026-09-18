import React from "react";

import {ButtonBack} from "@/components/ui/ButtonBack/ButtonBack";
import {getLocalizedPath} from "@/i18n/routing";
import {Link, useParams} from "react-router-dom";
import {cardsCrypto} from "@/shared/cardPayoutTypes"

import styles from "./CryptoMethodsPage.module.css";
import {DepositBonus} from "@/components/DepositBonus/DepositBonus";
import {useTranslation} from "react-i18next";

export const CryptoMethodsPage = () => {
  const { lang } = useParams();
  const { t } = useTranslation();

  const formatNum = (num?: number) => {
    if (!num && num !== 0) return '';
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  return (
    <>
      <section className={styles.depositCrypto}>
        <ButtonBack to={getLocalizedPath(lang, "/wallet/deposit")}>{t("wallet.chooseMethod")}</ButtonBack>
        <DepositBonus />
        <div className={styles.depositCrypto__content}>
          {cardsCrypto.map((card, index) => (
            <Link to={getLocalizedPath(lang, card.link)} className={styles.depositCrypto__item} key={index}>
              <img src={card.logo} className={styles["depositCrypto__item-image"]} alt=""/>
              <span className={styles["depositCrypto__item-price"]}>{t("wallet.from")} {formatNum(card.from)} UZS</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
