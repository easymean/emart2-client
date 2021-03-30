import styled from "styled-components";
import { THEME_COLOR } from "@asset/constant";

export const SiteItemWrapper = styled.div`
  diplay: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  border-style: solid;
  border-width: thin;
  border-radius: 0.8rem;
  border-color: ${THEME_COLOR.LIGHT_GRAY};

  margin: 2rem 2rem;
  padding: 1rem 1rem;

  font-size: 1.3rem;

  &:hover {
    transform: scale(1.2) perspective(0.7rem);
  }
`;
export const CategoryName = styled.div``;

export const ServiceName = styled.div``;

export const Dev = styled.div``;
