import { THEME_COLOR } from "@/asset/constant";
import styled from "styled-components";

export const ManageSiteContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;
  padding: 0 5rem;
`;

export const Title = styled.p`
  font-size: 5rem;
`;
export const SiteListContainer = styled.div``;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 4rem;
  margin-top: 4rem;
`;

export const CreateButton = styled.button`
  width: 15rem;
  height: 100%;
  margin-right: 0.5rem;

  &:hover {
    background-color: ${THEME_COLOR.HOVER_SMOKE};
  }
`;
