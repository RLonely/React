import { buildMockSession, buildMockUser, delayAuthRequest } from "./mock";
import {
  clearStoredSession,
  isSessionExpired,
  readStoredSession,
  writeStoredSession,
} from "./session";
import type { AuthSession, LoginPayload, RegisterPayload } from "./types";

export const getSession = async (): Promise<AuthSession | null> => {
  const session = readStoredSession();
  if (!session) {
    return null;
  }

  if (isSessionExpired(session)) {
    clearStoredSession();
    return null;
  }

  return session;
};

export const register = async (payload: RegisterPayload): Promise<AuthSession> => {
  await delayAuthRequest();

  const user = buildMockUser(payload.method, payload.value);
  const session = buildMockSession(user);

  writeStoredSession(session);

  return session;
};

export const login = async (payload: LoginPayload): Promise<AuthSession> => {
  await delayAuthRequest();

  const user = buildMockUser(payload.method, payload.value);
  const session = buildMockSession(user);

  writeStoredSession(session);

  return session;
};

export const logout = async (): Promise<void> => {
  await delayAuthRequest();
  clearStoredSession();
};
