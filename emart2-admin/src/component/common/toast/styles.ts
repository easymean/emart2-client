import styled, { css, keyframes } from "styled-components";
import { THEME_COLOR } from "@/asset/constant";

const fadein = keyframes`
  0% { top: 0px; opacity: 0; } 
  100% { top: 30px; opacity: 1; }
`;
const fadeout = keyframes`
  0% { top: 30px; opacity: 1; } 
  100% { top: 0px; opacity: 0; }
`;

export const ToastContainer = styled.div<{ show: boolean }>`
  position: fixed;
  top: 10%;
  left: 45%;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};

  height: 3rem;

  background-color: ${THEME_COLOR.WHITE};
  padding: 2rem 2rem;
  border-radius: 0.8rem;

  -webkit-animation: ${(props) =>
    props.show
      ? css`
          ${fadein} 0.5s, ${fadeout} 0.5s 2.5s
        `
      : ""};
  animation: ${(props) =>
    props.show
      ? css`
          ${fadein} 0.5s, ${fadeout} 0.5s 2.5s
        `
      : ""};
  animation-fill-mode: forwards;
`;

export const ToastMessage = styled.p`
  font-size: 2rem;
`;
