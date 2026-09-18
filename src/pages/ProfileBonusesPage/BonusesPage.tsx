import React from "react";

import {ButtonBack} from "@/components/ui/ButtonBack/ButtonBack";
import {Bonuses} from "@/components/Bonuses/Bonuses";

import styles from "./BonusesPage.module.css";
import {useTranslation} from "react-i18next";

export const BonusesPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.bonuses}>
      <ButtonBack to={'../profile'}>{t("common.bonus")}</ButtonBack>
      <Bonuses />
    </div>
  );
};
