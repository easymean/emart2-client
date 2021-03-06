import styled from "styled-components";
import { THEME_COLOR } from "@asset/constant";

export interface ItemBoxPropsType {
  height?: string;
  width?: string;
  padding?: string;
  margin?: string;
  shadow?: boolean;
}

export const CommonItemBox = styled.div`
  border-style: solid;
  border-width: thin;
  border-radius: 5%;
  border-color: ${THEME_COLOR.LIGHT_GRAY};
  box-shadow: ${(props: ItemBoxPropsType) =>
    props.shadow
      ? `0.5rem 0.5rem 0.5rem 0 ${THEME_COLOR.LIGHT_GRAY};`
      : `none`};

  height: ${(props: ItemBoxPropsType) =>
    props.height ? `${props.height};` : `100%;`};

  width: ${(props: ItemBoxPropsType) =>
    props.width ? `${props.width};` : `100%;`};

  padding: ${(props: ItemBoxPropsType) =>
    props.padding ? `${props.padding};` : `0;`};

  margin: ${(props: ItemBoxPropsType) =>
    props.margin ? `${props.margin};` : `0;`};

  font-size: 2rem;

  &:hover {
    transform: scale(1.2) perspective(0.7rem);
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
