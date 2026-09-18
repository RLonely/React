import styles from "./Ratings.module.css";
import {useState} from "react";
import {AllTheTime} from "@/components/AllTheTime/AllTheTime";
import {useTranslation} from "react-i18next";

export const Ratings = () => {
  const [activeTab, setActiveTab] = useState(0)
  const { t } = useTranslation();

  const tabs = [
    {
      label: t("date.allTime"),
      content: <AllTheTime />,
    },
    {
      label: t("date.april"),
      content: <AllTheTime />,
    },
    {
      label: t("date.march"),
      content: '',
    },
    {
      label: t("date.february"),
      content: '',
    },
  ];

  return (
    <>
      <div className={styles.ratings__tabs}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`${styles.ratings__tab} ${activeTab === index ? styles.active : ''}`}
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
