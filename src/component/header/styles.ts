import { Link } from "react-router-dom";
import styled from "styled-components";
import { BREAKPOINT } from "@asset/constant";

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

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
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
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
  color: inherit;

  display: flex;
  margin: 0rem 3rem;
`;
