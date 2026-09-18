import { promoMockData } from "./mock";
import type { Promo } from "./types";

const MOCK_DELAY_MS = 300;

const delay = (ms: number) =>
  new Promise<void>((resolve) => {
    window.setTimeout(resolve, ms);
  });

export const fetchPromos = async (): Promise<Promo[]> => {
  await delay(MOCK_DELAY_MS);

  return promoMockData;

  // Будуший вызов реального API, когда он будет готов
  // const response = await fetch("/api/promos");

  // if (!response.ok) {
  //   throw new Error("Failed to fetch promos");
  // }

  // return response.json();
};

export const fetchPromoById = async (promoId: string): Promise<Promo | null> => {
  await delay(MOCK_DELAY_MS);

  return promoMockData.find((promo) => promo.slug === promoId || promo.id === promoId) ?? null;

  // Будуший вызов реального API, когда он будет готов
  // const response = await fetch(`/api/promos/${promoId}`);

  // if (response.status === 404) {
  //   return null;
  // }

  // if (!response.ok) {
  //   throw new Error("Failed to fetch promo");
  // }

  // return response.json();
};
