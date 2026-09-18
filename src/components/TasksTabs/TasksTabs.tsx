import styles from "./TasksTabs.module.css";
import {useState} from "react";
import {Tasks} from "@/components/Tasks/Tasks";
import {DailyEntry} from "@/components/DailyEntry/DailyEntry";
import {useTranslation} from "react-i18next";

export const TasksTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { t } = useTranslation();

  const tabs = [
    {
      label: t("sections.tasks"),
      content: <Tasks />,
    },
    {
      label: t("sections.dailyLogin"),
      content: <DailyEntry />,
    }
  ];

  return (
    <>
      <div className={styles.tasks__tabs}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`${styles.tasks__tab} ${activeTab === index ? styles.active : ''}`}
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
