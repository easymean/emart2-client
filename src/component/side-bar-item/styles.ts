import styled from "styled-components";
import { BREAKPOINT, THEME_COLOR } from "@asset/constant";

export const SideBarItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 5rem;
  text-decoration: none;

  font-size: 1.5rem;
  font-wieght: 300;
  color: ${THEME_COLOR.BLACK};

  &:hover {
    background-color: ${THEME_COLOR.WHITE_SMOKE};
  }

  @media only screen and (min-width: ${BREAKPOINT}px) {
    height: 10rem;
    width: 100%;
    padding: 0 1.5rem;
    transition: background-color 0.5s;
  }
`;
