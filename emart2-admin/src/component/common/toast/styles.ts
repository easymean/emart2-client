import styled from "styled-components";
import { THEME_COLOR } from "@/asset/constant";

export const ToastContainer = styled.div`
  width: calc(100vw-10rem);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${THEME_COLOR.WHITE};
  padding: 4rem 4rem;
  border-radius: 0.8rem;
`;

export const Button = styled.button`
  font-size: 1.5rem;
  margin-top: 2rem;
`;

export const ModalMessage = styled.p`
  font-size: 2rem;
`;
