import styled from "styled-components";
import { THEME_COLOR } from "@/asset/constant";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Dimmed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${THEME_COLOR.GRAYER};
  opacity: 0.6;
  display: flex;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  z-index: 10; // 가장 위로
`;
