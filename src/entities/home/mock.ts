import type {
  BannerSlide,
  CategoryItem,
  LatestBetsSection,
  MediaCard,
  PromoSlide,
  ProviderItem,
} from "./types";

import baccarat from "@/assets/icons/categories/baccarat.svg";
import crash from "@/assets/icons/categories/crash.svg";
import hot from "@/assets/icons/categories/hot.svg";
import lobby from "@/assets/icons/categories/lobby.svg";
import popular from "@/assets/icons/categories/popular.svg";
import tableGames from "@/assets/icons/categories/tableGames.svg";
import Cherry from "@/assets/icons/cherry.svg";
import UZS from "@/assets/icons/uzs.png";
import firstBanner from "@/assets/icons/plug.jpeg";
import Image1 from "@/assets/icons/plug.jpeg";
import Image2 from "@/assets/icons/plug.jpeg";
import Image3 from "@/assets/icons/plug.jpeg";
import Image4 from "@/assets/icons/plug.jpeg";
import Image5 from "@/assets/icons/plug.jpeg";
import Image6 from "@/assets/icons/plug.jpeg";
import Image7 from "@/assets/icons/plug.jpeg";
import Image8 from "@/assets/icons/plug.jpeg";
import PromoCashback from "@/assets/icons/plug.jpeg";
import PromoGirl from "@/assets/icons/plug.jpeg";
import PromoVip from "@/assets/icons/plug.jpeg";
import providerBgaming from "@/assets/icons/plug.jpeg";
import providerEvolution from "@/assets/icons/plug.jpeg";
import providerGamebeat from "@/assets/icons/plug.jpeg";
import providerNetent from "@/assets/icons/plug.jpeg";
import providerPragmatic from "@/assets/icons/plug.jpeg";
import providerQuickspin from "@/assets/icons/plug.jpeg";
import providerThunderkick from "@/assets/icons/plug.jpeg";
import secondBanner from "@/assets/icons/plug.jpeg";

export const categoriesMockData: CategoryItem[] = [
  { id: "lobby", labelKey: "categories.lobby", icon: lobby, iconAlt: "lobby" },
  { id: "hot", labelKey: "categories.hot", icon: hot, iconAlt: "hot" },
  { id: "popular", labelKey: "categories.popular", icon: popular, iconAlt: "popular" },
  { id: "crash", labelKey: "categories.crash", icon: crash, iconAlt: "crash" },
  {
    id: "table-Games",
    labelKey: "categories.tableGames",
    icon: tableGames,
    iconAlt: "tableGames",
  },
  { id: "baccarat", labelKey: "categories.baccarat", icon: baccarat, iconAlt: "baccarat" },
  { id: "roulette", labelKey: "categories.roulette", icon: lobby, iconAlt: "roulette" },
  { id: "blackjack", labelKey: "categories.blackjack", icon: lobby, iconAlt: "blackjack" },
  { id: "fishing", labelKey: "categories.fishing", icon: lobby, iconAlt: "fishing" },
  { id: "lottery", labelKey: "categories.lottery", icon: lobby, iconAlt: "lottery" },
  { id: "bonus-buy", labelKey: "categories.bonusBuy", icon: lobby, iconAlt: "bonus-buy" },
  { id: "liveGames", labelKey: "categories.liveGames", icon: lobby, iconAlt: "liveGame" },
  { id: "newGames", labelKey: "categories.newGames", icon: lobby, iconAlt: "newGame" },
];

export const latestBetsMockData: LatestBetsSection = {
  tabs: [
    { id: "recent", labelKey: "latestBets.recentBets" },
    { id: "high-rollers", labelKey: "latestBets.highRollers" },
    { id: "best-players", labelKey: "latestBets.bestPlayers" },
  ],
  rows: [
    {
      id: "bet-1",
      gameName: "Gates of Olympus",
      gameIcon: Cherry,
      currencyIcon: UZS,
      payout: "120.000",
      payoutTone: "positive",
    },
    {
      id: "bet-2",
      gameName: "Gates of Olympus",
      gameIcon: Cherry,
      currencyIcon: UZS,
      payout: "-20.000",
      payoutTone: "negative",
    },
    {
      id: "bet-3",
      gameName: "Gates of Olympus",
      gameIcon: Cherry,
      currencyIcon: UZS,
      payout: "50.000",
      payoutTone: "positive",
    },
  ],
};

export const providersMockData: ProviderItem[] = [
  { id: "pragmatic", name: "Pragmatic Play", logo: providerPragmatic, href: "#" },
  { id: "evolution", name: "Evolution", logo: providerEvolution, href: "#" },
  { id: "netent", name: "NetEnt", logo: providerNetent, href: "#" },
  { id: "thunderkick", name: "Thunderkick", logo: providerThunderkick, href: "#" },
  { id: "gamebeat", name: "Gamebeat", logo: providerGamebeat, href: "#" },
  { id: "bgaming", name: "BGaming", logo: providerBgaming, href: "#" },
  { id: "quickspin", name: "Quickspin", logo: providerQuickspin, href: "#" },
];

export const gameCollectionsMockData: Record<"popular" | "newGames" | "liveGames", MediaCard[]> = {
  popular: [
    { id: "popular-1", image: Image1, alt: "Popular game 1", href: "#" },
    { id: "popular-2", image: Image2, alt: "Popular game 2", href: "#" },
    { id: "popular-3", image: Image3, alt: "Popular game 3", href: "#" },
    { id: "popular-4", image: Image4, alt: "Popular game 4", href: "#" },
    { id: "popular-5", image: Image5, alt: "Popular game 5", href: "#" },
    { id: "popular-6", image: Image6, alt: "Popular game 6", href: "#" },
    { id: "popular-7", image: Image7, alt: "Popular game 7", href: "#" },
    { id: "popular-8", image: Image8, alt: "Popular game 8", href: "#" },
  ],
  newGames: [
    { id: "new-1", image: Image1, alt: "New game 1", href: "#" },
    { id: "new-2", image: Image2, alt: "New game 2", href: "#" },
    { id: "new-3", image: Image3, alt: "New game 3", href: "#" },
    { id: "new-4", image: Image4, alt: "New game 4", href: "#" },
    { id: "new-5", image: Image5, alt: "New game 5", href: "#" },
    { id: "new-6", image: Image6, alt: "New game 6", href: "#" },
    { id: "new-7", image: Image7, alt: "New game 7", href: "#" },
    { id: "new-8", image: Image8, alt: "New game 8", href: "#" },
  ],
  liveGames: [
    { id: "live-1", image: Image1, alt: "Live game 1", href: "#" },
    { id: "live-2", image: Image2, alt: "Live game 2", href: "#" },
    { id: "live-3", image: Image3, alt: "Live game 3", href: "#" },
    { id: "live-4", image: Image4, alt: "Live game 4", href: "#" },
    { id: "live-5", image: Image5, alt: "Live game 5", href: "#" },
    { id: "live-6", image: Image6, alt: "Live game 6", href: "#" },
    { id: "live-7", image: Image7, alt: "Live game 7", href: "#" },
    { id: "live-8", image: Image8, alt: "Live game 8", href: "#" },
  ],
};

export const promoSlidesMockData: PromoSlide[] = [
  { id: "promo-slide-1", image: PromoCashback, alt: "Promo cashback", href: "#" },
  { id: "promo-slide-2", image: PromoVip, alt: "VIP promo", href: "#" },
  { id: "promo-slide-3", image: PromoGirl, alt: "Special promo", href: "#" },
];

export const mainBannerSlidesMockData: BannerSlide[] = [
  { id: "main-banner-1", image: firstBanner, alt: "Main banner 1" },
  { id: "main-banner-2", image: firstBanner, alt: "Main banner 2" },
  { id: "main-banner-3", image: firstBanner, alt: "Main banner 3" },
];

export const secondaryBannerSlidesMockData: BannerSlide[] = [
  { id: "secondary-banner-1", image: secondBanner, alt: "Secondary banner 1" },
  { id: "secondary-banner-2", image: secondBanner, alt: "Secondary banner 2" },
  { id: "secondary-banner-3", image: secondBanner, alt: "Secondary banner 3" },
];
