import React, {useState} from "react";
import {useParams} from "react-router-dom";
import {ButtonBack} from "@/components/ui/ButtonBack/ButtonBack";
import {cardsCrypto} from "@/shared/cardPayoutTypes"

import iconEthereum from "@/assets/icons/ethereum.svg";
import iconCoin from "@/assets/icons/uzs-coin.svg";
import iconQrCode from "@/assets/icons/plug.jpeg";
import iconHelp from "@/assets/icons/help.svg";

import styles from "./CryptoType.module.css";
import {getLocalizedPath} from "@/i18n/routing";
import {DepositBonus} from "@/components/DepositBonus/DepositBonus";
import {useTranslation} from "react-i18next";

export const CryptoType = () => {
  const [isCopied, setIsCopied] = useState(false);
  const { lang, cryptoType } = useParams();
  const { t } = useTranslation();

  const card = cardsCrypto.find((card) => {
    return card.type === cryptoType
  });

  const copyTextClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      console.log('Скопировано!');

      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      setIsCopied(false);
      console.error('Ошибка', err);
    }
  }

  const formatNum = (num?: number) => {
    if (!num && num !== 0) return '';
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  return (
    <>
      <section className={styles.cryptoItem}>
        <ButtonBack to={getLocalizedPath(lang, "/wallet/deposit/crypto")}>{t("wallet.chooseMethod")}</ButtonBack>
        <DepositBonus />
        <div className={styles.cryptoItem__content}>
          <a href="" className={styles.cryptoItem__item}>
            <img src={card?.logo} className={styles["cryptoItem__item-image"]} alt=""/>
            <span className={styles["cryptoItem__item-price"]}>{t("wallet.from")} {formatNum(card?.from)} UZS</span>
          </a>
        </div>

        <div className={styles.cryptoItem__inputs}>
          <div>
            <label className={styles.cryptoItem__label}>
              {t("wallet.receive")}:
            </label>
            <div className={styles["cryptoItem__inputs-input"]}>
              <input className={styles["cryptoItem__input"]} min="100000" type="number" placeholder="100 000" required/>
              <img className={styles.cryptoItem_svg} src={iconCoin} alt=""/>
            </div>
            <p className={styles["crypto__label-min"]}>{t("wallet.minimum")} 100 000</p>
          </div>
          <div>
            <label className={styles.cryptoItem__label}>
              {t("wallet.give")}:
            </label>
            <div className={styles["cryptoItem__inputs-input"]}>
              <input className={styles.cryptoItem__input} step="0.1" min="0" type="number" placeholder="100 000 " required/>
              <img className={styles.cryptoItem_svg} src={iconEthereum} alt=""/>
            </div>
          </div>
          <div>
            <label className={styles.cryptoItem__label}>
              {t("wallet.address")}:
            </label>
            <div className={styles["cryptoItem__inputs-address"]}>
              <img className="" src={iconQrCode} alt=""/>
              <div className={styles["cryptoItem__address-code"]}>
                <p className={styles["crypto__label-copy"]}>
                  TSFbF7N1SE6dCfxKFMS4zkuur9LionMojY
                </p>
                <button className={styles["cryptoItem__address-copy"]} onClick={() => copyTextClipboard('TSFbF7N1SE6dCfxKFMS4zkuur9LionMojY')}>
                  {isCopied ? 'Скопировано' : 'Копировать'}
                </button>
              </div>
            </div>
          </div>
          <div className={styles["cryptoItem__button-help"]}>
            {t("wallet.needHelp")}?
            <img src={iconHelp} alt=""/>
          </div>
        </div>
      </section>
    </>
  )
}
