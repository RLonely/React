import { useState } from "react";
import { useTranslation } from "react-i18next";

import styles from "./Categories.module.css";

import { useCategoriesQuery } from "@/entities/home/queries";

export const Categories = () => {
  const [active, setActive] = useState(0);
  const { t } = useTranslation();
  const { data: categories = [], isLoading, isError } = useCategoriesQuery();

  return (
    <div className={styles.categories}>
      {isLoading && <div>{t("common.loading")}</div>}
      {isError && <div>{t("common.requestFailed")}</div>}
      {categories.map((cat, index) => (
        <div
          key={cat.id}
          onClick={() => setActive(index)}
          className={`${styles.categories__item} ${active === index ? styles["categories__item--active"] : ""}`}
        >
          <img src={cat.icon} alt={cat.iconAlt} />
          {t(cat.labelKey)}
        </div>
      ))}
    </div>
  );
};
