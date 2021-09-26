import { useRef, useState } from "react";

export const useScroll = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [scrollActive, setScrollActive] = useState(false);

  const offsetRef = useRef(null);

  const onScroll = () => {
    setScrollY(window.scrollY);

    if (!offsetRef.current) {
      setScrollActive(true);
      return;
    }
    const currentOffset =
      offsetRef.current.scrollHeight + offsetRef.current.offsetTop;

    if (scrollY > currentOffset) {
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
    offsetRef,
    onScroll,
    onClick,
  };
};
