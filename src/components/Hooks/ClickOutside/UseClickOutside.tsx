import { useEffect, RefObject } from "react";

export const UseClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T | null>,
  callback: () => void,
  excludeRefs: RefObject<HTMLElement | null>[] = [],
): void => {
  useEffect(() => {
    const handleClick = (e: MouseEvent): void => {
      const isInside = ref.current?.contains(e.target as Node);
      const isExcluded = excludeRefs.some((excludeRef) =>
        excludeRef.current?.contains(e.target as Node),
      );

      if (!isInside && !isExcluded) {
        callback();
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref, callback, excludeRefs]);
};
