import styled from "styled-components";
import { Link } from "react-router-dom";
import { THEME_COLOR } from "@asset/constant";

export const SideBarItem = styled(Link)`
  width: 100%;
  height: 5rem;
  // display: flex;
  // margin-right: 1rem;
  // justify-content: flex-start;
  // align-items: flex-start;
  text-decoration: none;

  padding: 1rem 2rem;
  font-size: 1.2rem;
  color: ${THEME_COLOR.BLACK};

  &:hover {
    background-color: whitesmoke;
  }
`;

export const SideBarTitle = styled.div`
  font-size: 2rem;
  font-weight: 300;
  font-color: ${THEME_COLOR.BLACK};
`;
