import styled from "styled-components";

import { BREAKPOINT, THEME_COLOR } from "@asset/constant";
import { Link } from "react-router-dom";

export const SideBarContainer = styled.div`
  width: 12%;
  background-color: ${THEME_COLOR.GRAYER};

  ::-webkit-scrollbar {
    width: 5px;
  }

  @media only screen and (min-width: ${BREAKPOINT}px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const SideBarItemWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const Logo = styled.img`
  display: none;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    display: block;
    width: 9rem;
  }
`;

export const DesktopLink = styled(Link)`
  display: none;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    display: block;
  }
`;
