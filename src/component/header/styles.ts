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
  background-color: grey;

  padding: 0rem 3rem;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    height: 10rem;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  width: 30%;
`;

export const EmartLogo = styled.image``;

export const LinkText = styled.p`
  color: white;
  text-align: center;
`;

export const DesktopLink = styled(Link)`
  display: flex;
`;
