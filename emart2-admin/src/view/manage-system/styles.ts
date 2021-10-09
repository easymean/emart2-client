import { THEME_COLOR } from "@/asset/constant";
import styled from "styled-components";

export const ManageSystemContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 4rem;
  margin: 0.5rem 0;
  padding-right: 5rem;
`;

export const CreateButton = styled.button`
  width: 15rem;
  height: 100%;
  margin-right: 0.5rem;

  &:hover {
    background-color: ${THEME_COLOR.HOVER_SMOKE};
  }
`;

export const ManageHeader = styled.div`
  display: flex;
  flex-direction: column;
  height: 30rem;
  width: 100%;

  margin: 0.5rem 0;
  padding: 6rem 6rem 0 6rem;

  border: 1px solid ${THEME_COLOR.LIGHT_GRAY};
`;

export const ManageInfo = styled.div`
  height: 80%;
  display: block;
`;

export const Title = styled.p`
  color: ${THEME_COLOR.MAIN_YELLOW};
  font-size: 8rem;
  margin: 1rem 0;
`;

export const Description = styled.p`
  color: ${THEME_COLOR.GRAYER};
  font-size: 1.8rem;
`;
