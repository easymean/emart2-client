import styled from "styled-components";
import { THEME_COLOR } from "@asset/constant";

export const InputBox = styled.input`
  position: relative;
  width: 100%;
  height: 100%;

  font-size: 2rem;
  border: 1px solid ${THEME_COLOR.GRAYER};
  border-radius: 0.8rem;
  padding: 1rem 2rem;
`;
