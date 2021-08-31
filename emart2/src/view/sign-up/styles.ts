import { THEME_COLOR } from "@/asset/constant";
import styled from "styled-components";

export const SignUpContainer = styled.div`
  width: 80%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SignUpWrapper = styled.div`
  margin-top: 6rem;
  width: 50%;
  height: 50%;
`;

export const InputBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  padding: 1rem 2rem;
`;

export const CheckIdButton = styled.button`
  margin-left: 2rem;
  display: block;
  width: 10rem;
`;
export const SignUpButton = styled.button`
  width: 100%;
`;

export const PwdCaution = styled.p`
  color: ${THEME_COLOR.RED};
  font-size: 0.8rem;
  padding: 0.3rem 2rem;
`;
