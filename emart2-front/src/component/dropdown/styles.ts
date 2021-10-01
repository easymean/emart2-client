import { THEME_COLOR } from "@/asset/constant";
import styled from "styled-components";

//컨테이너 위에 상위 부모 wrapper relative 선언해야 함
export const DropdownContainer = styled.nav`
  width: 100%;
  display: flex;
  position: relative;
`;

export const DropdownList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;

  overflow: auto;
  transform-origin: top center;
  margin-top: 1rem;
  position: absolute;
`;

export const DropdownItem = styled.li`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${THEME_COLOR.WHITE};

  &:hover {
    background-color: ${THEME_COLOR.HOVER_SMOKE};
  }
  a {
    width: 100%;
    text-decoration: none;
    color: inherit;
  }
`;

export const DropdownTitle = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1rem 1rem;
  font-size: 2rem;
`;
