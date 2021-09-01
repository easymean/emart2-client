import { Link } from "react-router-dom";
import styled from "styled-components";
import { BREAKPOINT, THEME_COLOR } from "@asset/constant";

export const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${THEME_COLOR.MAIN_YELLOW};

  height: 4rem;
  margin-top: 1rem;
  padding: 0 1.5rem;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    height: 6rem;
    padding: 0 6rem;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const MenuDropdown = styled.div`
  visibility: hidden;
  display: flex;
  width: 100%;
`;
export const MenuTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const MenuButton = styled.button`
  height: 100%;
  width: 100%;
  outline: none;
  border: none;
  font-size: 1.5rem;
  background-color: inherit;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    color: inherit;
    display: none;
    @media only screen and (min-width: ${BREAKPOINT}px) {
      display: block;
    }
  }

  &:hover {
    text-decoration: underline;
    text-underline-position: under;
    ${MenuDropdown} {
      visibility: visible;
    }
  }

  @media only screen and (min-width: ${BREAKPOINT}px) {
    width: 10rem;
    margin: 0 0.5rem;
    transition: background-color 0.5s;
  }
`;

export const Logo = styled.img`
  display: none;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    display: block;
    width: 9rem;
    margin-right: 10rem;
  }
`;

export const DesktopLink = styled(Link)`
  display: none;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    display: block;
  }
`;

export const SmallMenuText = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0.5rem 0.5rem;
  font-size: 1.1rem;
`;
