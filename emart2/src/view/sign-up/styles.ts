import { THEME_COLOR } from "@/asset/constant";
import styled from "styled-components";

export const SignUpContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SignUpWrapper = styled.div`
  display: grid;
  grid-gap: 1.5rem 1.5rem;
  margin-top: 6rem;
  width: 43rem;
  height: 30rem;
`;

export const InputBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const CheckIdButton = styled.button`
  margin-left: 2rem;
  display: block;
  width: 10rem;
`;

export const CheckEmailButton = styled.button`
  margin-left: 2rem;
  display: block;
  width: 10rem;
`;

export const SignUpButton = styled.button`
  width: 100%;
  height: 3.5rem;
`;

export const PwdCaution = styled.p<{ valid: boolean }>`
  display: ${(props) => (props.valid ? "none" : "block")};
  color: ${THEME_COLOR.RED};
  font-size: 0.8rem;
  padding: 0.3rem 2rem;
`;
