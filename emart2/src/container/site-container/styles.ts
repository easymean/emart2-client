import styled, { css } from "styled-components";
import { THEME_COLOR } from "@asset/constant";

export const SiteContainer = styled.div`
  width: 100%;
  //height: 100%;

  display: flex;
  flex-direction: column;
`;

export const CategoryHeader = styled.div`
  display: flex;
  flex-direction: column;
  height: 30rem;

  margin: 0.5rem 0;
  padding: 6rem 6rem 0 6rem;

  border: 1px solid ${THEME_COLOR.LIGHT_GRAY};
`;

export const CategoryInfo = styled.div`
  height: 80%;
  display: block;
`;

export const CategoryTitle = styled.p`
  color: ${THEME_COLOR.MAIN_YELLOW};
  font-size: 8rem;
  margin: 1rem 0;
`;

export const CategoryDescription = styled.p`
  color: ${THEME_COLOR.GRAYER};
  font-size: 1.8rem;
`;

export const TypeNav = styled.div<{ scroll: boolean }>`
  display: flex;
  height: 10rem;
  background-color: ${THEME_COLOR.WHITE};

  ${(props) =>
    props.scroll &&
    css`
      padding-left: 6rem;
      position: fixed;
      right: 0;
      left: 0;
      top: 0;
      z-index: 100;
      border-bottom: 1px solid ${THEME_COLOR.LIGHT_GRAY};
    `}
`;

export const TypeButton = styled.button`
  background-color: inherit;
  font-size: 2rem;
  margin: 0 6rem 0 0;

  &:hover {
    color: ${THEME_COLOR.MAIN_YELLOW};
    text-decoration: underline;
    text-underline-position: under;
  }
`;

export const SiteListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SiteListWrapper = styled.div`
  padding-top: 10rem;
  margin: 0 6rem;
  display: flex;
  height: 90rem;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
