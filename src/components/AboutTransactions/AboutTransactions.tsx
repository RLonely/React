import styles from './AboutTransactions.module.css';
import {useTranslation} from "react-i18next";

export const AboutTransactions = () => {
  const { t } = useTranslation();

  return (
    <div className={styles["about__tab-content"]}>
      <div className={styles.about__item}>
        <time className={styles["about__item-date"]} dateTime="2026-8-10">10 Август, 2025</time>
        <div className={styles.about__transactions}>
          <div className={styles.transactions__left}>
            <p className={styles.transactions__name}>{t("wallet.deposit")}</p>
            <div className={styles.transactions__title}>Bank Name</div>
            <time className={styles.transactions__date} dateTime="23:59:00">23:59:00</time>
          </div>
          <div className={styles.transactions__right}>
            <div className={styles.transactions__check}>100 000 UZS</div>
            <div className={`${styles.transactions__status} ${styles.transactions__yellow}`}>{t("wallet.pending")}<span
              className={styles.transactions__cancel}>({t("wallet.cancel")})</span></div>
          </div>
        </div>
        <div className={styles.about__transactions}>
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
        <div className={styles.about__transactions}>
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
        <div className={styles.about__transactions}>
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
        <div className={styles.about__transactions}>
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
      <div className={styles.about__item}>
        <time className={styles["about__item-date"]} dateTime="2026-8-10">10 Август, 2025</time>
        <div className={styles.about__transactions}>
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
        <div className={styles.about__transactions}>
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
      <div className={styles.about__item}>
        <time className={styles["about__item-date"]} dateTime="2026-8-10">10 Август, 2025</time>
        <div className={styles.about__transactions}>
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
  )
}
