import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";

import styles from "./Popular.module.css";

import popularPurpul from "@/assets/icons/popularPurpul.svg";
import { useGameCollectionQuery } from "@/entities/home/queries";
import { getLocalizedPath } from "@/i18n/routing";

export const Popular = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const { data: games = [], isLoading, isError } = useGameCollectionQuery("popular");

  return (
    <div className={styles.popular}>
      <div className={styles.popular__top}>
        <div className={styles.popular__title}>
          <img src={popularPurpul} alt="popularPurpul" loading="lazy" />
          <div>{t("sections.popular")}</div>
        </div>
        <Link to={getLocalizedPath(lang, `/games/popular`)} className={styles.popular__all}>
          {t("common.viewAll")}
          <svg
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.650024 0.649902L4.65002 4.6499L0.650024 8.6499"
              stroke="#7B43FF"
              stroke-width="1.3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>
      </div>
      <div className={styles.popular__content}>
        {isLoading && <div>{t("common.loading")}</div>}
        {isError && <div>{t("common.requestFailed")}</div>}
        {!isLoading &&
          !isError &&
          games.map((game) => (
            <div key={game.id} className={styles.popular__item}>
              <img src={game.image} alt={game.alt} loading="lazy" />
            </div>
          ))}
      </div>
    </div>
  );
};
