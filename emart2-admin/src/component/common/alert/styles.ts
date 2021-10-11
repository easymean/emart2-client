import styled from "styled-components";
import { THEME_COLOR } from "@/asset/constant";

export const AlertContainer = styled.div<{ show: boolean }>`
  z-index: 200;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};

  width: calc(100vw-10rem);
  height: 3rem;

  background-color: ${THEME_COLOR.WHITE};
  padding: 2rem 2rem;
  border-radius: 0.8rem;
`;

export const Button = styled.button`
  font-size: 1.5rem;
  margin-top: 2rem;
`;

export const ModalMessage = styled.p`
  font-size: 2rem;
`;
