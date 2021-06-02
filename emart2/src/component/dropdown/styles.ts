import { THEME_COLOR } from "@/asset/constant";
import styled from "styled-components";
import { DropdownProps } from "./types";

//컨테이너 위에 상위 부모 wrapper relative 선언해야 함
export const DropdownContainer = styled.nav`
  width: 100%;
  display: flex;
  position: relative;
`;

export const DropdownList = styled.ul<DropdownProps>`
  display: ${(props: DropdownProps) => (props.visible ? "flex" : "none")};
  flex-direction: column;
  width: 100%;

  overflow: auto;
  transform-origin: top center;
  position: absolute;
`;

export const DropdownItem = styled.li`
  display: flex;
  border: solid 0.1rem ${THEME_COLOR.LIGHT_GRAY};
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
