import styled from "styled-components";
import { Link } from "react-router-dom";

import { THEME_COLOR } from "@asset/constant";

export const CategoryItem = styled(Link)`
  display: flex;
  margin-right: 1.5rem;
  justify-content: center;
  align-items: center;
  height: 8rem;

  border-radius: 0.8rem;
  text-decoration: none;

  &:hover {
    background-color: ${THEME_COLOR.HOVER_SMOKE};
    transform: scale(1.2) perspective(0.7rem);
  }

  background-color: ${THEME_COLOR.LIGHT_GRAY};
  color: inherit;
  padding: 1rem 1rem;
`;

export const CategoryTitle = styled.div`
  text-decoration: none;
  font-size: 2.5rem;
  font-weight: 500;
  color: inherit;
`;
