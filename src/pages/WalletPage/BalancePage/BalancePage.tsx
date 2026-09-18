import styles from "./BalancePage.module.css";
import iconDeposit from "@/assets/icons/icon-deposit.svg";
import {Link, useParams} from "react-router-dom";
import {getLocalizedPath} from "@/i18n/routing";
import iconPayout from "@/assets/icons/icon-payout.svg";
import iconBalance from "@/assets/icons/icon-balance.svg";
import React from "react";
import IconTransactions from "@/assets/icons/icon-transactions.svg";
import {useTranslation} from "react-i18next";

export const BalancePage: React.FC = () => {
  const { lang } = useParams();
  const { t } = useTranslation();

  return (
    <div className={styles.wallet}>
      <div className={styles.wallet__tabs}>
        <Link to={getLocalizedPath(lang, `/wallet/deposit`)} className={styles.wallet__tab}>
          <img src={iconDeposit} className={styles["wallet__icon-deposit"]} alt=""/>
          {t("wallet.deposit")}
        </Link>
        <Link to={getLocalizedPath(lang, `/wallet/payout`)} className={styles.wallet__tab}>
          <img src={iconPayout} className={styles["wallet__icon-pay"]} alt=""/>
          {t("wallet.payout")}
        </Link>
        <div className={`${styles.wallet__tab} ${styles["wallet__tab-active"]}`}>
          <img src={iconBalance} className={styles["wallet__icon-balance"]} alt=""/>
          {t("wallet.balance")}
        </div>
      </div>

      <section className={styles.balance}>
        <div className={styles.balance__card}>
          <div className={styles["balance__card-text"]}>
            <p className={styles["balance__card-title"]}>{t("wallet.balance")}</p>
            <span className={styles["balance__card-balance"]}>10 000.00 USDT</span>
          </div>
          <div className={styles["balance__card-text"]}>
            <p className={styles["balance__card-title"]}>{t("wallet.availableWithdrawal")}</p>
            <span className={styles["balance__card-accessible"]}>1980.00 USDT</span>
          </div>
        </div>
        <div className={styles.balance__content}>
          <div className={styles["balance__content-title"]}>
            <img src={IconTransactions} alt="" loading="lazy"/>
            {t("wallet.transactions")}
          </div>
          <div className={styles.balance__item}>
            <time className={styles["balance__item-date"]} dateTime="2026-8-10">10 Август, 2025</time>
            <div className={styles.balance__transactions}>
              <div className={styles.transactions__left}>
                <p className={styles.transactions__name}>{t("wallet.deposit")}</p>
                <div className={styles.transactions__title}>Bank Name</div>
                <time className={styles.transactions__date} dateTime="23:59:00">23:59:00</time>
              </div>
              <div className={styles.transactions__right}>
                <div className={styles.transactions__check}>100 000 UZS</div>
                <div className={`${styles.transactions__status} ${styles.transactions__yellow}`}>{t("wallet.pending")}<span
                  className={styles.transactions__cancel}>(Отмена)</span></div>
              </div>
            </div>
            <div className={styles.balance__transactions}>
              <div className={styles.transactions__left}>
                <p className={styles.transactions__name}>{t("wallet.deposit")}</p>
                <div className={styles.transactions__title}>Bank Name</div>
                <time className={styles.transactions__date} dateTime="23:59:00">23:59:00</time>
              </div>
              <div className={styles.transactions__right}>
                <div className={styles.transactions__check}>100 000 UZS</div>
                <div className={`${styles.transactions__status} ${styles.transactions__yellow}`}>{t("wallet.pending")}</div>
              </div>
            </div>
            <div className={styles.balance__transactions}>
              <div className={styles.transactions__left}>
                <p className={styles.transactions__name}>{t("wallet.deposit")}</p>
                <div className={styles.transactions__title}>Bank Name</div>
                <time className={styles.transactions__date} dateTime="23:59:00">23:59:00</time>
              </div>
              <div className={styles.transactions__right}>
                <div className={styles.transactions__check}>100 000 UZS</div>
                <div className={`${styles.transactions__status} ${styles.transactions__red}`}>{t("wallet.denied")}</div>
              </div>
            </div>
            <div className={styles.balance__transactions}>
              <div className={styles.transactions__left}>
                <p className={styles.transactions__name}>{t("wallet.payout")}</p>
                <div className={styles.transactions__title}>Bank Name</div>
                <time className={styles.transactions__date} dateTime="23:59:00">23:59:00</time>
              </div>
              <div className={styles.transactions__right}>
                <div className={styles.transactions__check}>100 000 UZS</div>
                <div className={`${styles.transactions__status} ${styles.transactions__red}`}>{t("wallet.cancelled")}</div>
              </div>
            </div>
            <div className={styles.balance__transactions}>
              <div className={styles.transactions__left}>
                <p className={styles.transactions__name}>{t("wallet.payout")}</p>
                <div className={styles.transactions__title}>Bank Name</div>
                <time className={styles.transactions__date} dateTime="23:59:00">23:59:00</time>
              </div>
              <div className={styles.transactions__right}>
                <div className={styles.transactions__check}>100 000 UZS</div>
                <div className={`${styles.transactions__status} ${styles.transactions__white}`}>{t("wallet.complete")}</div>
              </div>
            </div>
          </div>
          <div className={styles.balance__item}>
            <time className={styles["balance__item-date"]} dateTime="2026-8-10">10 Август, 2025</time>
            <div className={styles.balance__transactions}>
              <div className={styles.transactions__left}>
                <p className={styles.transactions__name}>{t("wallet.deposit")}</p>
                <div className={styles.transactions__title}>Bank Name</div>
                <time className={styles.transactions__date} dateTime="23:59:00">23:59:00</time>
              </div>
              <div className={styles.transactions__right}>
                <div className={styles.transactions__check}>100 000 UZS</div>
                <div className={`${styles.transactions__status} ${styles.transactions__red}`}>{t("wallet.denied")}</div>
              </div>
            </div>
            <div className={styles.balance__transactions}>
              <div className={styles.transactions__left}>
                <p className={styles.transactions__name}>{t("wallet.payout")}</p>
                <div className={styles.transactions__title}>Bank Name</div>
                <time className={styles.transactions__date} dateTime="23:59:00">23:59:00</time>
              </div>
              <div className={styles.transactions__right}>
                <div className={styles.transactions__check}>100 000 UZS</div>
                <div className={`${styles.transactions__status} ${styles.transactions__white}`}>{t("wallet.complete")}</div>
              </div>
            </div>
          </div>
          <div className={styles.balance__item}>
            <time className={styles["balance__item-date"]} dateTime="2026-8-10">10 Август, 2025</time>
            <div className={styles.balance__transactions}>
              <div className={styles.transactions__left}>
                <p className={styles.transactions__name}>{t("wallet.payout")}</p>
                <div className={styles.transactions__title}>Bank Name</div>
                <time className={styles.transactions__date} dateTime="23:59:00">23:59:00</time>
              </div>
              <div className={styles.transactions__right}>
                <div className={styles.transactions__check}>100 000 UZS</div>
                <div className={`${styles.transactions__status} ${styles.transactions__white}`}>{t("wallet.complete")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
