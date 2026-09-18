import { useTranslation } from "react-i18next";

import styles from "./PromoList.module.css";

import { PromoListItem } from "@/components/PromoListItem/PromoListItem";
import { usePromosQuery } from "@/entities/promo/queries";
import { type Promo } from "@/entities/promo/types";

export const PromoList = () => {
  const { t } = useTranslation();
  const { data: promoListItems = [], isLoading, isError } = usePromosQuery();

  // const tabs = [
  //   {
  //     name: "Promo",
  //     label: t("common.promo"),
  //     path: "/promos",
  //   },
  //   {
  //     name: "Bonus",
  //     label: t("common.bonus"),
  //     path: "/bonuses",
  //   },
  // ];

  return (
    <div className={styles["promo-list"]}>
      {/*<h2>{t("common.promoAndBonus")}</h2>*/}
      {/*<div className={styles["promo-list__tabs"]}>*/}
      {/*  {tabs.map((tab) => {*/}
      {/*    const isActive = stripLangPrefix(location.pathname) === tab.path;*/}

      {/*    return (*/}
      {/*      <NavLink*/}
      {/*        key={tab.name}*/}
      {/*        to={getLocalizedPath(lang, isActive ? "/promos" : tab.path)}*/}
      {/*        className={`${styles["promo-list__tab"]} ${isActive ? styles["promo-list__tab-active"] : ""}`}*/}
      {/*        style={{ textDecoration: "none" }}*/}
      {/*      >*/}
      {/*        {tab.label}*/}
      {/*      </NavLink>*/}
      {/*    );*/}
      {/*  })}*/}
      {/*</div>*/}
      <div className={styles["promo-list__content"]}>
        {isLoading && <div>{t("common.loading")}</div>}
        {isError && <div>{t("common.requestFailed")}</div>}
        {!isLoading && !isError && promoListItems.length === 0 && <div>{t("common.noData")}</div>}

        {!isLoading && !isError && promoListItems.map((item: Promo) => <PromoListItem key={item.slug} item={item} />)}
      </div>
    </div>
  );
};
