import styled from "styled-components";
import { THEME_COLOR } from "@/asset/constant";

export const ConfirmContainer = styled.div<{ show: boolean }>`
  z-index: 150;
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
  padding: 1rem 1rem;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0 3px 7px -3px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 1rem;
`;

export const OkButton = styled.button`
  font-size: 1.5rem;
  margin-right: 1rem;
`;

export const CancelButton = styled.button`
  font-size: 1.5rem;
  margin-left: 1rem;
`;

export const Message = styled.p`
  font-size: 2rem;
`;
