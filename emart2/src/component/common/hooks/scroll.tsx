import { useEffect, useMemo, useRef, useState } from "react";

export const useScroll = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [scrollActive, setScrollActive] = useState(false);
  const offsetRef = useRef(null);

  //offsetRef의 지점부터 스크롤 시작
  const listener = () => {
    setScrollY(window.scrollY);
    if (offsetRef.current) {
      const currentOffset =
        offsetRef.current.scrollHeight + offsetRef.current.offsetTop;

      if (scrollY > currentOffset) {
        setScrollActive(true);
      } else {
        setScrollActive(false);
      }
    }
  };

  useEffect(() => {
    let mounted = true;

    window.addEventListener(
      "scroll",
      () => {
        if (mounted) {
          listener();
        }
      },
      { capture: true }
    );
    return () => {
      mounted = false;
    };
  }, [scrollY]);

  //특정 위치로 스크롤 이동
  const scrollToRef = (ref) => {
    if (ref) {
      window.scrollTo({
        top: ref.offsetTop,
      });
    }

    setScrollY(window.scrollY);
  };

  return {
    scrollActive,
    offsetRef,
    scrollToRef,
  };
};
