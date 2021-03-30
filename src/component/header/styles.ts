import { Link } from "react-router-dom";
import styled from "styled-components";
import { BREAKPOINT } from "@asset/constant";

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 7rem;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    height: 10rem;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 0 3.5rem;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  height: 100%;
`;

export const MenuWrapper = styled.div`
  display: flex;
  margin: 0rem 2rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const EmartLogo = styled.img`
  width: 6rem;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    display: block;
    width: 9rem;
  }
`;

export const DesktopLink = styled(Link)`
  text-decoration: none;
  text-align: center;

  color: black;
  font-size: 1.5rem;
  background-color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 6rem;
  padding: 0 1.5rem;

  &:hover {
    background-color: whitesmoke;
  }
`;
