import type { AuthMethod, AuthSession, AuthSessionBalances, AuthUser } from "./types";

export const AUTH_SESSION_TTL_MS = 1000 * 60 * 50;
export const AUTH_REQUEST_DELAY_MS = 500;

const createBalances = (): AuthSessionBalances => ({
  main: {
    amount: 100,
    currency: "UZS",
  },
  bonus: {
    amount: 150000,
    currency: "UZS",
  },
  coins: 15,
});

export const buildMockUser = (method: AuthMethod, value: string): AuthUser => ({
  id: crypto.randomUUID(),
  method,
  value,
  createdAt: new Date().toISOString(),
});

export const buildMockSession = (user: AuthUser): AuthSession => ({
  user,
  token: crypto.randomUUID(),
  balances: createBalances(),
  expiresAt: new Date(Date.now() + AUTH_SESSION_TTL_MS).toISOString(),
});

export const delayAuthRequest = async () => {
  await new Promise<void>((resolve) => {
    window.setTimeout(resolve, AUTH_REQUEST_DELAY_MS);
  });
};
