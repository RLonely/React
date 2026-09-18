import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { getSession, login, logout, register } from "./api";
import type { AuthSession, LoginPayload, RegisterPayload } from "./types";

export const authQueryKeys = {
  session: ["auth", "session"] as const,
};

export const useAuthSessionQuery = () =>
  useQuery({
    queryKey: authQueryKeys.session,
    queryFn: getSession,
    refetchInterval: 1000 * 30,
  });

export const useLoginMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: LoginPayload) => login(payload),
    onSuccess: (session) => {
      queryClient.setQueryData<AuthSession | null>(authQueryKeys.session, session);
    },
  });
};

export const useRegisterMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: RegisterPayload) => register(payload),
    onSuccess: (session) => {
      queryClient.setQueryData<AuthSession | null>(authQueryKeys.session, session);
    },
  });
};

export const useLogoutMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.setQueryData<AuthSession | null>(authQueryKeys.session, null);
    },
  });
};
