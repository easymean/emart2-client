import { useState } from "react";

export const useHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showMenu2, setShowMenu2] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleMenu2 = () => {
    setShowMenu2(!showMenu2);
  };
  return { showMenu, showMenu2, toggleMenu, toggleMenu2 };
};
