import styled from "styled-components";
import { THEME_COLOR } from "@asset/constant";

export const CommonItemBox = styled.div`
  width: 13rem;
  height: 8rem;

  border-style: solid;
  border-width: thin;
  border-radius: 5%;
  border-color: ${THEME_COLOR.LIGHT_GRAY};

  margin: 1rem 1rem;
  padding: 1rem 1rem;

  font-size: 2rem;

  &:hover {
    transform: scale(1.2) perspective(0.7rem);
  }

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
