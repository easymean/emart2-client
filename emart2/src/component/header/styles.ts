import { Link } from "react-router-dom";
import styled from "styled-components";
import { BREAKPOINT, THEME_COLOR } from "@asset/constant";

export const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  height: 6rem;
  padding: 0 1.5rem;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    height: 10rem;
    padding: 0 6rem;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const MenuDropdown = styled.div`
  visibility: visible;
`;

export const MenuButton = styled.button`
  height: 100%;
  outline: none;
  border: none;
  font-size: 1.5rem;
  background-color: inherit;

  display: flex;
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
    background-color: ${THEME_COLOR.HOVER_SMOKE};
    ${MenuDropdown} {
      visibility: visible;
    }
  }

  @media only screen and (min-width: ${BREAKPOINT}px) {
    height: 10rem;
    width: 10rem;
    padding: 0 1.5rem;
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
