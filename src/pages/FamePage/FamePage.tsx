import {ButtonBack} from "@/components/ui/ButtonBack/ButtonBack";

import styles from './FamePage.module.css';
import {Fame} from "@/components/Fame/Fame";
import {useTranslation} from "react-i18next";

export const FamePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.fame}>
      <ButtonBack to="/">{t("sections.hallOfFame")}</ButtonBack>
      <Fame />
    </div>
  )
}
