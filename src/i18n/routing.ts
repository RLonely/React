import { defaultLanguage, isSupportedLanguage, type AppLanguage } from "@/i18n";

const normalizePath = (path: string): string => {
  if (!path) {
    return "/";
  }

  return path.startsWith("/") ? path : `/${path}`;
};

export const getLocaleFromPath = (pathname: string): AppLanguage => {
  const firstSegment = pathname.split("/").filter(Boolean)[0];

  if (firstSegment && isSupportedLanguage(firstSegment)) {
    return firstSegment;
  }

  return defaultLanguage;
};

export const getLocalizedPath = (language: string | undefined, path: string): string => {
  const safeLanguage = language && isSupportedLanguage(language) ? language : defaultLanguage;
  const normalizedPath = normalizePath(path);

  if (normalizedPath === "/") {
    return `/${safeLanguage}`;
  }

  return `/${safeLanguage}${normalizedPath}`;
};

export const stripLangPrefix = (pathname: string): string => {
  const normalizedPath = normalizePath(pathname);
  const pathSegments = normalizedPath.split("/").filter(Boolean);

  if (pathSegments.length > 0 && isSupportedLanguage(pathSegments[0])) {
    const stripped = pathSegments.slice(1).join("/");

    return stripped ? `/${stripped}` : "/";
  }

  return normalizedPath;
};
