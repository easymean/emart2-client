import { THEME_COLOR } from "@/asset/constant";
import styled from "styled-components";

export const ManageWebsiteContainer = styled.div`
  width: calc(100vw-10rem);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10rem 5rem 0 5rem;
`;

export const Title = styled.p`
  font-size: 5rem;
  margin: 5rem 0;
`;

export const SiteInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
`;
export const Table = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 12rem 1fr;
  grid-gap: 2rem 2rem;
`;

export const InputBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 4rem;
`;

export const Label = styled.div`
  display: flex;
  font-size: 2rem;
  align-items: center;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 4rem;
  margin-top: 4rem;
`;
export const SaveButton = styled.button`
  width: 100%;
  height: 100%;
  margin-right: 0.5rem;

  &:hover {
    background-color: ${THEME_COLOR.HOVER_SMOKE};
  }
`;

export const CancelButton = styled.button`
  width: 100%;
  height: 100%;
  margin-left: 0.5rem;
  &:hover {
    background-color: ${THEME_COLOR.HOVER_SMOKE};
  }
`;

export const Select = styled.select`
  width: 100%;
  font-size: 2rem;
  padding: 1rem 2rem;
  option {
    min-height: 4rem;
    display: flex;
    white-space: pre; //?
  }
`;
