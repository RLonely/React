import { Link, useLocation } from "react-router-dom";

import styles from "./Header.module.css";

import { useAuthSessionQuery } from "@/entities/auth/queries";
import { getLocalizedPath, getLocaleFromPath } from "@/i18n/routing";
import { HeaderAuthorized } from "@/layout/HeaderAuthorized/HeaderAuthorized";
import { HeaderUnauthorized } from "@/layout/HeaderUnauthorized/HeaderUnauthorized";

export const Header = () => {
  const location = useLocation();
  const currentLanguage = getLocaleFromPath(location.pathname);
  const { data: session } = useAuthSessionQuery();

  return (
    <header>
      <Link to={getLocalizedPath(currentLanguage, "/")} className={styles["header__left-block"]}>
        Logo
      </Link>
      {session ? <HeaderAuthorized session={session} /> : <HeaderUnauthorized />}
    </header>
  );
};
