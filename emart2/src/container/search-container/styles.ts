import styled from "styled-components";
import { THEME_COLOR } from "@/asset/constant";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;

  margin: 5rem 0rem;
  padding: 0rem 2rem;
`;

export const SeachBarContainer = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DropdownWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
`;

export const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
`;

export const HashtagContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  margin: 2rem 0rem;
`;

export const HashtagItemWrapper = styled.div`
  display: flex;
  width: 35%;
`;

export const SiteName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 0.5rem;
  font-size: 1.5rem;
`;

export const Dev = styled.p`
  color: ${THEME_COLOR.GRAYER};
`;
