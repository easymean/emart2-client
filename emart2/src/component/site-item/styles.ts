import styled from "styled-components";
import { TagProps } from "./types";
import { TAG_COLOR } from "@asset/constant";

export const Description = styled.div`
  font-size: 1.2rem;
  color: white;
  border-radius: 10%;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 2rem;
  margin: 0.5rem 0.5rem;
  background-color: ${(props: TagProps) =>
    props.dev ? `${TAG_COLOR.DEV}` : `${TAG_COLOR.PROD}`};
`;
