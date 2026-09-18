export type AuthMethod = "email" | "phone";

export type AuthUser = {
  createdAt: string;
  id: string;
  method: AuthMethod;
  value: string;
};

export type AuthSessionBalances = {
  bonus: {
    amount: number;
    currency: string;
  };
  coins: number;
  main: {
    amount: number;
    currency: string;
  };
};

export type AuthSession = {
  balances: AuthSessionBalances;
  expiresAt: string;
  token: string;
  user: AuthUser;
};

export type LoginPayload = {
  method: AuthMethod;
  password: string;
  value: string;
};

export type RegisterPayload = {
  method: AuthMethod;
  password?: string;
  value: string;
};
