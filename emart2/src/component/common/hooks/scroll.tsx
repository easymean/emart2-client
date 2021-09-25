import { useState } from "react";

export const useScroll = (targetId: string) => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [scrollActive, setScrollActive] = useState(false);
  const [offset, setOffset] = useState(0);
  const getOffset = () => {
    const content = document.getElementById(targetId);
    if (!content) return;
    setOffset(content.offsetHeight);
  };

  const onScroll = () => {
    getOffset();
    setScrollY(window.scrollY);
    if (scrollY > offset) {
      setScrollActive(true);
    } else {
      setScrollActive(false);
    }
  };

  const onClick = () => {
    setScrollY(window.scrollY);
  };

  const delay = 15;

  return {
    scrollY,
    scrollActive,
    onScroll,
    onClick,
  };
};
