import { THEME_COLOR } from "@/asset/constant";
import styled from "styled-components";

export const InputBox = styled.input`
  font-size: 2rem;
  border: 0.5rem solid ${THEME_COLOR.MAIN_YELLOW};
  border-radius: 0.8rem;
  padding: 1rem 2rem;
  //  position: relative;
  width: 100%;
  height: 100%;

  ::placeholder {
    color: ${THEME_COLOR.LIGHT_GRAY};
  }
`;
