import { THEME_COLOR } from "@/asset/constant";
import styled from "styled-components";
import { VisibleProps } from "./types";

export const DropdownContainer = styled.nav`
  position: absolute;
  width: 100%;
  display: ${(props: VisibleProps) => (props.visible ? "flex" : "none")};
  border: solid 0.1rem ${THEME_COLOR.LIGHT_GRAY};
  background-color: ${THEME_COLOR.WHITE};
  padding: 1rem 2rem;
`;

export const DropdownList = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const Dropdown = styled.li`
  height: 3.5rem;

  &:hover {
    background-color: ${THEME_COLOR.HOVER_SMOKE};
  }

  a {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    font-size: 1.5rem;
    color: inherit;
    text-decoration: none;
    padding: 1rem 0.5rem;
  }
`;

export const Dev = styled.div`
  color: ${THEME_COLOR.GRAYER};
`;
