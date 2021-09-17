import { useEffect, useState } from "react";

export const useScroll = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  const listener = () => {
    setScrollY(window.pageYOffset);
  };

  const delay = 15;
  useEffect(() => {
    window.addEventListener("scroll");
    return () => window.addEventListener("scroll", listener);
  });
  return {
    scrollY,
  };
};
