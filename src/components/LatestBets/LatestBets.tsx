import { useState } from "react";
import { useTranslation } from "react-i18next";

import styles from "./LatestBets.module.css";

import LiveIcon from "@/assets/icons/live-icon.svg";
import { useLatestBetsSectionQuery } from "@/entities/home/queries";

export const LatestBets = () => {
  const [tabs, setTabs] = useState(0);
  const { t } = useTranslation();
  const { data, isLoading, isError } = useLatestBetsSectionQuery();
  const bets = data?.tabs ?? [];
  const rows = data?.rows ?? [];

  return (
    <div className={styles.latestBets}>
      <div className={styles.latestBets__title}>
        {t("sections.latestBets")}
        <img src={LiveIcon} alt="LiveIcon" loading="lazy" />
      </div>
      <div className={styles.latestBets__tabs}>
        {bets.map((bet, index) => (
          <div
            key={bet.id}
            onClick={() => setTabs(index)}
            className={`${styles.latestBets__item} ${tabs === index ? styles["latestBets__item-active"] : ""}`}
          >
            {t(bet.labelKey)}
          </div>
        ))}
      </div>
      <div className={styles.latestBets__content}>
        {isLoading && <div>{t("common.loading")}</div>}
        {isError && <div>{t("common.requestFailed")}</div>}
        {!isLoading && !isError && (
          <table className={styles.latestBets__table}>
            <thead>
              <tr className={styles["latestBets__table-head"]}>
                <td>{t("latestBets.game")}</td>
                <td>{t("latestBets.payout")}</td>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id}>
                  <td>
                    <img src={row.gameIcon} alt={row.gameName} loading="lazy" /> {row.gameName}
                  </td>
                  <td
                    className={
                      row.payoutTone === "positive"
                        ? styles.latestBets__green
                        : styles.latestBets__grey
                    }
                  >
                    <img src={row.currencyIcon} alt="UZS" loading="lazy" /> {row.payout}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
