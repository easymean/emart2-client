import { useRef, useState } from "react";

export const useScroll = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [scrollActive, setScrollActive] = useState(false);

  const offsetRef = useRef(null);

  //offsetRef의 지점부터 스크롤 시작
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

  //특정 위치로 스크롤 이동
  const scrollToRef = (ref) => {
    if (ref) {
      window.scrollTo({
        top: ref.offsetTop,
      });
    }

    setScrollY(window.scrollY);
  };

  const delay = 15;

  return {
    scrollY,
    scrollActive,
    offsetRef,
    onScroll,
    scrollToRef,
  };
};
