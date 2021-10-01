import styled from "styled-components";
import { TagProps } from "./types";
import { TAG_COLOR } from "@asset/constant";

export const Description = styled.div`
  font-size: 1.5rem;
  color: ${(props: TagProps) =>
    props.dev ? `${TAG_COLOR.DEV}` : `${TAG_COLOR.PROD}`};
  border: 0.05mm solid
    ${(props: TagProps) =>
      props.dev ? `${TAG_COLOR.DEV}` : `${TAG_COLOR.PROD}`};

  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 3rem;
  margin: 0.5rem 0.5rem;
`;
