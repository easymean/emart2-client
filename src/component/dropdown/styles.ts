import { THEME_COLOR } from "@/asset/constant";
import styled from "styled-components";
import { VisibleProps } from "./types";

export const DropdownContainer = styled.div`
  position: absolute;
  width: 100%;
  display: ${(props: VisibleProps) => (props.visible ? "flex" : "none")};
  flex-direction: column;
  border: solid 0.1rem ${THEME_COLOR.LIGHT_GRAY};
  background-color: ${THEME_COLOR.WHITE};
`;

export const DropdownList = styled.ul`
  display: flex;
`;

export const Dropdown = styled.li`
  height: 3.5rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  font-size: 1.5rem;
  padding: 1rem 0.5rem;

  &:hover {
    background-color: ${THEME_COLOR.HOVER_SMOKE};
  }

  a {
    display: none;
    text-decoration: none;
  }
`;

export const DropdownWrapper = styled.div`
  display: flex;
`;
