import styled from "styled-components";
import { Link } from "react-router-dom";
import { THEME_COLOR } from "@asset/constant";

export const SideBarItem = styled(Link)`
  width: 100%;
  height: 6rem;
  text-decoration: none;

  padding: 1rem 2rem;
  font-size: 1.6rem;
  font-wieght: 500;
  color: ${THEME_COLOR.BLACK};

  &:hover {
    background-color: whitesmoke;
  }
`;
