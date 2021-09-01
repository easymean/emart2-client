import styled from "styled-components";
import { THEME_COLOR } from "@asset/constant";

export const SiteContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

// export const ContentWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;

//   width: 100%;
// `;

// export const SiteRowContainer = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: row;
//   justify-content: flex-start;
//   align-items: center;

//   padding: 1rem 0;
// `;

// export const StageName = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   width: 13rem;
//   height: 8rem;

//   border-radius: 5%;
//   background-color: ${THEME_COLOR.LIGHT_GRAY};
//   color: black;

//   padding: 1rem 1rem;

//   font-size: 2rem;
//   font-weight: 500;
// `;

export const CategoryHeader = styled.div`
  display: block;
  height: 30rem;
  //flex-direction: column;

  margin: 0.5rem 0;
  padding: 6rem 6rem 0 6rem;

  border: 1px solid ${THEME_COLOR.LIGHT_GRAY};
`;

export const CategoryInfo = styled.div`
  height: 80%;
  display: block;
`;

export const CategoryTitle = styled.p`
  color: ${THEME_COLOR.MAIN_YELLOW};
  font-size: 8rem;
  margin: 1rem 0;
`;

export const CategoryDescription = styled.p`
  color: ${THEME_COLOR.GRAYER};
  font-size: 1.8rem;
`;

export const TypeContainer = styled.div`
  display: flex;
`;

export const TypeName = styled.button`
  background-color: inherit;
  font-size: 2rem;
  margin: 0 6rem 0 0;

  &:hover {
    color: ${THEME_COLOR.MAIN_YELLOW};
    text-decoration: underline;
    text-underline-position: under;
  }
`;

export const SiteListContainer = styled.div`
  padding: 0;
  margin: 0 6rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
