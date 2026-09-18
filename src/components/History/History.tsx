import styles from './History.module.css';
import {useState} from "react";
import {AboutTransactions} from "@/components/AboutTransactions/AboutTransactions";
import {AboutLatestGames} from "@/components/AboutLatestGames/AboutLatestGames";
import {useTranslation} from "react-i18next";

export const History = () => {
  const [activeTab, setActiveTab] = useState(0)
  const {t} = useTranslation();

  const tabs = [
    {
      label: t("wallet.transactions"),
      content: <AboutTransactions />,
    },
    {
      label: t("profile.latestGames"),
      content: <AboutLatestGames />,
    }
  ];

  return (
    <>
      <div className={styles.history__tabs}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`${styles.history__tab} ${activeTab === index ? styles.active : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </div>
        ))}
      </div>

      {tabs[activeTab] && tabs[activeTab].content}
    </>
  )
}
