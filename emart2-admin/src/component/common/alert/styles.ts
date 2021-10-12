import styled from "styled-components";
import { THEME_COLOR } from "@/asset/constant";

export const AlertContainer = styled.div<{ show: boolean }>`
  z-index: 200;
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};

  width: calc(100vw-10rem);
  height: 8rem;

  background-color: ${THEME_COLOR.WHITE};
  border: solid 1px ${THEME_COLOR.GRAYER};
  padding: 2rem 2rem;
  border-radius: 0.8rem;
`;

export const Button = styled.button`
  font-size: 1.5rem;
  margin-top: 1rem;
`;

export const ModalMessage = styled.p`
  font-size: 2rem;
`;
