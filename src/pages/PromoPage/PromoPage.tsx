import React from "react";

import styles from "./PromoPage.module.css";

import { PromoList } from "@/components/PromoList/PromoList";
import {ButtonBack} from "@/components/ui/ButtonBack/ButtonBack";
import {useTranslation} from "react-i18next";

export const PromoPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.promo}>
      <ButtonBack to="/">{t("common.promo")}</ButtonBack>
      <PromoList />
    </div>
  );
};
