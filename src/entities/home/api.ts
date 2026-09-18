import {
  categoriesMockData,
  gameCollectionsMockData,
  latestBetsMockData,
  mainBannerSlidesMockData,
  promoSlidesMockData,
  providersMockData,
  secondaryBannerSlidesMockData,
} from "./mock";
import type {
  BannerSlide,
  CategoryItem,
  GameCollectionId,
  LatestBetsSection,
  MediaCard,
  PromoSlide,
  ProviderItem,
} from "./types";

const MOCK_DELAY_MS = 300;

const delay = (ms: number) =>
  new Promise<void>((resolve) => {
    window.setTimeout(resolve, ms);
  });

export const fetchCategories = async (): Promise<CategoryItem[]> => {
  await delay(MOCK_DELAY_MS);

  return categoriesMockData;
};

export const fetchLatestBetsSection = async (): Promise<LatestBetsSection> => {
  await delay(MOCK_DELAY_MS);

  return latestBetsMockData;
};

export const fetchProviders = async (): Promise<ProviderItem[]> => {
  await delay(MOCK_DELAY_MS);

  return providersMockData;
};

export const fetchGameCollection = async (collectionId: GameCollectionId): Promise<MediaCard[]> => {
  await delay(MOCK_DELAY_MS);

  return gameCollectionsMockData[collectionId];
};

export const fetchPromoSlides = async (): Promise<PromoSlide[]> => {
  await delay(MOCK_DELAY_MS);

  return promoSlidesMockData;
};

export const fetchMainBanners = async (): Promise<BannerSlide[]> => {
  await delay(MOCK_DELAY_MS);

  return mainBannerSlidesMockData;
};

export const fetchSecondaryBanners = async (): Promise<BannerSlide[]> => {
  await delay(MOCK_DELAY_MS);

  return secondaryBannerSlidesMockData;
};
