import styled from "styled-components";

import { BREAKPOINT } from "@asset/constant";

export const SideBarListContainer = styled.div`
  display: none;

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
