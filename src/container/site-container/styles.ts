import styled from "styled-components";
import { THEME_COLOR } from "@asset/constant";

export const SiteContainer = styled.div`
  width: 100%;
  heigth: 100%;

  display: flex;
  flex-direction: row;
`;
export const SideBarWrapper = styled.div`
  width: 13%;
  background-color: ${THEME_COLOR.GRAYER};
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 60%;
  padding: 2rem 2rem;
  margin: 8rem;
`;

export const CategoryInfoContainer = styled.div`
  height: 30%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const CategoryTitle = styled.p`
  padding: 1rem 1rem;
  font-size: 3rem;
`;

export const CategoryDescription = styled.p`
  padding: 1rem 1rem;
  font-size: 1.5rem;
`;

export const SiteListContainter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  padding: 2rem 0;
`;

export const SiteRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 1rem 0;
`;

export const StageName = styled.div`
  width: 18rem;
  font-size: 2rem;
`;
