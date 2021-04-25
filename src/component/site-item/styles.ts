import styled from "styled-components";
import { THEME_COLOR } from "@asset/constant";

export const SiteItem = styled.div`
  width: 13rem;
  height: 8rem;

  border-style: solid;
  border-width: thin;
  border-radius: 5%;
  border-color: ${THEME_COLOR.LIGHT_GRAY};

  margin: 2rem 2rem;
  padding: 1rem 1rem;

  font-size: 2rem;

  &:hover {
    transform: scale(1.2) perspective(0.7rem);
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Description = styled.div`
  padding: 1rem 0;
  font-size: 1.2rem;
`;

export const Dev = styled.div``;
