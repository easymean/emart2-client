import styled from "styled-components";
import { THEME_COLOR } from "@asset/constant";

export const SiteContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  padding: 2rem 8rem;
  margin-top: 8rem;
`;

export const CategoryTitle = styled.p`
  padding: 1rem 1rem;
  font-size: 3rem;
`;

export const CategoryDescription = styled.p`
  padding: 1rem 1rem;
  font-size: 1.5rem;
`;

export const SiteRowContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  padding: 1rem 0;
`;

export const StageName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 13rem;
  height: 8rem;

  border-radius: 5%;
  background-color: ${THEME_COLOR.LIGHT_GRAY};
  color: black;

  padding: 1rem 1rem;

  font-size: 2rem;
  font-weight: 500;
`;
