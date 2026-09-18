import { useQuery } from "@tanstack/react-query";

import { fetchPromoById, fetchPromos } from "./api";

export const promoQueryKeys = {
  all: ["promos"] as const,
  detail: (promoId: string) => [...promoQueryKeys.all, promoId] as const,
};

export const usePromosQuery = () =>
  useQuery({
    queryKey: promoQueryKeys.all,
    queryFn: fetchPromos,
  });

export const usePromoQuery = (promoId: string) =>
  useQuery({
    queryKey: promoQueryKeys.detail(promoId),
    queryFn: () => fetchPromoById(promoId),
    enabled: promoId.length > 0,
  });
