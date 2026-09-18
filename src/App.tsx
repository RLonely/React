import { useEffect } from "react";
import {
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

import { Games } from "@/components/Games/Games";
import { PromoItem } from "@/components/PromoItem/PromoItem";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import { defaultLanguage, getCurrentLanguage, isSupportedLanguage, setAppLanguage } from "@/i18n";
import { AuthLayout } from "@/layout/AuthLayout/AuthLayout";
import { MainLayout } from "@/layout/MainLayout/MainLayout";
import { BonusesPage } from "@/pages/ProfileBonusesPage/BonusesPage";
import { HomePage } from "@/pages/HomePage/HomePage";
import { LoginPage } from "@/pages/LoginPage/LoginPage";
import { LoginResetPage } from "@/pages/LoginResetPage/LoginResetPage";
import { PromoPage } from "@/pages/PromoPage/PromoPage";
import { RegistrationPage } from "@/pages/RegistrationPage/RegistrationPage";
import { TermsPage } from "@/pages/TermsPage/TermsPage";
import {ProfilePage} from "@/pages/ProfilePage/ProfilePage";
import {BaseLayout} from "@/layout/BaseLayout/BaseLayout";
import {AboutPage} from "@/pages/ProfileAboutPage/AboutPage";
import {ProfileWalletPage} from "@/pages/ProfileWalletPage/ProfileWalletPage";
import {SettingPage} from "@/pages/ProfileSettingPage/SettingPage";
import {FamePage} from "@/pages/FamePage/FamePage";
import {TasksPage} from "@/pages/TasksPage/TasksPage";
import {DepositPage} from "@/pages/WalletPage/DepositPage/DepositPage";
import {PayoutPage} from "@/pages/WalletPage/PayoutPage/PayoutPage";
import {BalancePage} from "@/pages/WalletPage/BalancePage/BalancePage";

import "./App.css";
import {PayoutType} from "@/components/PayoutType/PayoutType";
import {DepositType} from "@/components/DepositType/DepositType";
import {CryptoMethodsPage} from "@/pages/CryptoMethodsPage/CryptoMethodsPage";
import {CryptoType} from "@/components/CryptoType/CryptoType";

type LanguageParam = {
  lang?: string;
};

const LocalizedRouteGuard = () => {
  const { lang } = useParams<LanguageParam>();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!lang) {
      return;
    }

    if (!isSupportedLanguage(lang)) {
      const nextPath = location.pathname.split("/").slice(2).join("/");
      const redirectPath = `/${defaultLanguage}${nextPath ? `/${nextPath}` : ""}${location.search}${location.hash}`;

      navigate(redirectPath, { replace: true });
      return;
    }

    if (getCurrentLanguage() !== lang) {
      void setAppLanguage(lang);
    }
  }, [lang, location.pathname, location.search, location.hash, navigate]);

  return <Outlet />;
};

const RedirectToDefaultLanguage = () => {
  const location = useLocation();
  const pathname = location.pathname === "/" ? "" : location.pathname;

  return (
    <Navigate replace to={`/${defaultLanguage}${pathname}${location.search}${location.hash}`} />
  );
};

function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Navigate replace to={`/${defaultLanguage}`} />} />

        <Route path="/:lang" element={<LocalizedRouteGuard />}>
          <Route element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="promos" element={<PromoPage />} />
            <Route path="promos/:promoId" element={<PromoItem />} />
            <Route path="profile-bonuses" element={<BonusesPage />} />
            {/*<Route path="games" element={<Games />}  />*/}
            <Route path="games/:category" element={<Games />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="profile-about" element={<AboutPage />} />
            <Route path="profile-wallet" element={<ProfileWalletPage />} />
            <Route path="profile-setting" element={<SettingPage />} />
            <Route path="fame" element={<FamePage />} />
            <Route path="tasks" element={<TasksPage />} />
          </Route>

          <Route element={<BaseLayout />}>
            <Route path="wallet" element={<DepositPage />} />
            <Route path="wallet/deposit" element={<DepositPage />} />
            <Route path="wallet/deposit/crypto" element={<CryptoMethodsPage />} />
            <Route path="wallet/deposit/crypto/:cryptoType" element={<CryptoType />} />
            <Route path="wallet/deposit/:depositType" element={<DepositType />} />
            <Route path="wallet/payout" element={<PayoutPage />} />
            <Route path="wallet/payout/:payoutType" element={<PayoutType />} />
            <Route path="wallet/balance" element={<BalancePage />} />
          </Route>

          <Route element={<AuthLayout />}>
            <Route path="registration" element={<RegistrationPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="login/reset" element={<LoginResetPage />} />
            <Route path="terms" element={<TermsPage />} />
          </Route>
        </Route>

        <Route path="*" element={<RedirectToDefaultLanguage />} />
      </Routes>
    </ScrollToTop>
  );
}

export default App;
