import styles from './ProfileWalletPage.module.css'

import {Wallet} from "@/components/Wallet/Wallet";
import {History} from "@/components/History/History";
import {ButtonBack} from "@/components/ui/ButtonBack/ButtonBack";
import { getLocalizedPath } from "@/i18n/routing";
import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";

export const ProfileWalletPage: React.FC = () => {
  const { lang } = useParams();
  const { t } = useTranslation();

  return (
    <div className={styles["profile-wallet"]}>
      <ButtonBack to={getLocalizedPath(lang, `/profile`)}>{t("sections.wallet")}</ButtonBack>
      <Wallet />
      <History />
    </div>
  )
}
