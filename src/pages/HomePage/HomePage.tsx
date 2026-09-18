import styles from "./HomePage.module.css";

import { Categories } from "@/components/Categories/Categories";
import { LiveGame } from "@/components/LiveGame/LiveGame";
import { MainBanner } from "@/components/MainBanner/MainBanner";
import { NewGame } from "@/components/NewGame/NewGame";
import { Popular } from "@/components/Popular/Popular";
import { Promo } from "@/components/Promo/Promo";
import { SearchGame } from "@/components/SearchGame/SearchGame";
import { SecondaryBanner } from "@/components/SecondaryBanner/SecondaryBanner";

export const HomePage: React.FC = () => {
  return (
    <div className={styles.home}>
      <MainBanner />
      <SearchGame />
      <Categories />
      <Popular />
      <SecondaryBanner />
      <NewGame />
      <Promo />
      <LiveGame />
    </div>
  );
};
