import {Wallet} from "@/components/Wallet/Wallet";
import {Safety} from "@/components/Safety/Safety";
import {History} from "@/components/History/History";
import {User} from "@/components/User/User";
import {ButtonBack} from "@/components/ui/ButtonBack/ButtonBack";

import styles from './AboutPage.module.css'
import {useTranslation} from "react-i18next";

export const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.about}>
      <ButtonBack to="../profile">{t("sections.about")}</ButtonBack>
      <User />
      <Wallet />
      <Safety />
      <History />
    </div>
  )
}
