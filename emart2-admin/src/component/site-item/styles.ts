import styled from "styled-components";
import { TagProps } from "./types";
import { TAG_COLOR, THEME_COLOR } from "@asset/constant";

export const Name = styled.div`
  display: flex;
`;
export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 10rem;
  font-size: 1.5rem;
`;

export const Url = styled.p`
  margin: 0.5rem 0;
  color: ${THEME_COLOR.LIGHT_GRAY};
`;
export const Description = styled.p`
  margin: 0.5rem 0;
`;

export const Tags = styled.div`
  color: ${(props: TagProps) =>
    props.dev ? `${TAG_COLOR.DEV}` : `${TAG_COLOR.PROD}`};
  border: 0.05mm solid
    ${(props: TagProps) =>
      props.dev ? `${TAG_COLOR.DEV}` : `${TAG_COLOR.PROD}`};
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 3rem;
`;
