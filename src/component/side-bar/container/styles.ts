import styled from "styled-components";

import { BREAKPOINT, THEME_COLOR } from "@asset/constant";

export const SideBarContainer = styled.div`
  width: 13%;
  background-color: ${THEME_COLOR.BEIGE};

  ::-webkit-scrollbar {
    width: 5px;
    background: none;
  }

  @media only screen and (min-width: ${BREAKPOINT}px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const SideBarItemWrapper = styled.div`
  display: flex;
`;
