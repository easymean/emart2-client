import styled from "styled-components";
import { THEME_COLOR } from "@asset/constant";

export const Title = styled.div`
  margin-top: 10rem;
  font-size: 5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  padding-left: 2rem;
`;

export const SubTitle = styled.div`
  padding-left: 2rem;
  font-size: 2rem;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  margin: 2rem 6rem;
`;

export const MainTitleArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
`;

export const CardContainers = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  flex-direction: row;
`;

export const Yellow = styled.div`
  color: ${THEME_COLOR.MAIN_YELLOW};
  font-size: 6rem;
`;

export const English = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  color: ${THEME_COLOR.GRAYER};
`;
