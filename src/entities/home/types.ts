export interface CategoryItem {
  id: string;
  labelKey: string;
  icon: string;
  iconAlt: string;
}

export interface LatestBetTab {
  id: string;
  labelKey: string;
}

export interface LatestBetRow {
  id: string;
  gameName: string;
  gameIcon: string;
  currencyIcon: string;
  payout: string;
  payoutTone: "positive" | "negative";
}

export interface LatestBetsSection {
  tabs: LatestBetTab[];
  rows: LatestBetRow[];
}

export interface ProviderItem {
  id: string;
  name: string;
  logo: string;
  href: string;
}

export interface MediaCard {
  id: string;
  image: string;
  alt: string;
  href: string;
}

export interface PromoSlide {
  id: string;
  image: string;
  alt: string;
  href: string;
}

export interface BannerSlide {
  id: string;
  image: string;
  alt: string;
}

export type GameCollectionId = "popular" | "newGames" | "liveGames";
