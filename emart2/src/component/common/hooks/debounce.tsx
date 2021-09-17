import { useEffect, useState } from "react";

export const useDebounce = (func: (x) => void, delay: number) => {
  useEffect(
    (...args) => {
      const handler = setTimeout(() => {
        func(...args);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    },
    [x]
  );
};
