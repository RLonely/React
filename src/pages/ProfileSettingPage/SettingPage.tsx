import React from "react";

import {ButtonBack} from "@/components/ui/ButtonBack/ButtonBack";

import styles from "./SettingPage.module.css";
import {SettingForms} from "@/components/SettingForms/SettingForms";
import {useTranslation} from "react-i18next";

export const SettingPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.setting}>
      <ButtonBack to={'../profile'}>{t("profile.setting")}</ButtonBack>
      <SettingForms />
    </div>
  )
}
