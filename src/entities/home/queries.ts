import { useQuery } from "@tanstack/react-query";

import {
  fetchCategories,
  fetchGameCollection,
  fetchLatestBetsSection,
  fetchMainBanners,
  fetchPromoSlides,
  fetchProviders,
  fetchSecondaryBanners,
} from "./api";
import type { GameCollectionId } from "./types";

const REFERENCE_DATA_STALE_TIME_MS = 1000 * 60 * 10; // 10 минут данные считаются свежими
const REFERENCE_DATA_GC_TIME_MS = 1000 * 60 * 30; // 30 минут и данные будут удалены из кэша, если не используются

export const homeQueryKeys = {
  categories: ["home", "categories"] as const,
  latestBets: ["home", "latest-bets"] as const,
  providers: ["home", "providers"] as const,
  gameCollection: (collectionId: GameCollectionId) =>
    ["home", "game-collection", collectionId] as const,
  promoSlides: ["home", "promo-slides"] as const,
  mainBanners: ["home", "main-banners"] as const,
  secondaryBanners: ["home", "secondary-banners"] as const,
};

export const useCategoriesQuery = () =>
  useQuery({
    queryKey: homeQueryKeys.categories,
    queryFn: fetchCategories,
    staleTime: REFERENCE_DATA_STALE_TIME_MS,
    gcTime: REFERENCE_DATA_GC_TIME_MS,
  });

export const useLatestBetsSectionQuery = () =>
  useQuery({
    queryKey: homeQueryKeys.latestBets,
    queryFn: fetchLatestBetsSection,
  });

export const useProvidersQuery = () =>
  useQuery({
    queryKey: homeQueryKeys.providers,
    queryFn: fetchProviders,
    staleTime: REFERENCE_DATA_STALE_TIME_MS,
    gcTime: REFERENCE_DATA_GC_TIME_MS,
  });

export const useGameCollectionQuery = (collectionId: GameCollectionId) =>
  useQuery({
    queryKey: homeQueryKeys.gameCollection(collectionId),
    queryFn: () => fetchGameCollection(collectionId),
  });

export const usePromoSlidesQuery = () =>
  useQuery({
    queryKey: homeQueryKeys.promoSlides,
    queryFn: fetchPromoSlides,
  });

export const useMainBannersQuery = () =>
  useQuery({
    queryKey: homeQueryKeys.mainBanners,
    queryFn: fetchMainBanners,
  });

export const useSecondaryBannersQuery = () =>
  useQuery({
    queryKey: homeQueryKeys.secondaryBanners,
    queryFn: fetchSecondaryBanners,
  });
