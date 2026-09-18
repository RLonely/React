import styles from './Bonuses.module.css';
import {useState} from "react";
import {ActiveBonuses} from "@/components/ActiveBonuses/ActiveBonuses";
import {AvailableBonuses} from "@/components/AvailableBonuses/AvailableBonuses";
import {BonusArchive} from "@/components/BonusArchive/BonusArchive";
import {PromoList} from "@/components/PromoList/PromoList";

import IconDiamond from "@/assets/icons/dimondPurpul.svg";
import {Link, useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {getLocalizedPath} from "@/i18n/routing";

export const Bonuses = () => {
  const { t } = useTranslation();
  const { lang } = useParams();

  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      label: t("welcomeBonus.active"),
      content: <ActiveBonuses />,
    },
    {
      label: t("welcomeBonus.available"),
      content: <AvailableBonuses />,
    },
    {
      label: t("welcomeBonus.archive"),
      content: <BonusArchive />,
    },
  ];

  return (
    <>
      <div className={styles.bonuses__tabs}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`${styles.bonuses__tab} ${activeTab === index ? styles.active : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </div>
        ))}
      </div>

      <div className={styles.bonuses__title}>
        {t("welcomeBonus.bonusTitle")}
      </div>

      {tabs[activeTab] && tabs[activeTab].content}

      <div className={styles["bonuses__promo-top"]}>
        <div className={styles["bonuses__promo-title"]}>
          <img src={IconDiamond} alt="dimondPurpul" loading="lazy"/>
          <div>{t("sections.promo")}</div>
        </div>
        <div className={styles["bonuses__promo-right"]}>
          <Link className={styles.bonuses__all} to={getLocalizedPath(lang, "/promos")}>
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
      </div>
      <PromoList/>
    </>
  )
}
