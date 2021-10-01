import { BREAKPOINT } from "@/asset/constant";
import styled from "styled-components";

export const ImageContainer = styled.div`
  display: flex;
  height: 40%;
  justify-content: center;
  margin: 2rem 0;
`;
export const CardImage = styled.img`
  display: none;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    display: block;
  }
`;
export const CardTitle = styled.p`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

export const CardDescrption = styled.p`
  font-size: 1rem;
`;
