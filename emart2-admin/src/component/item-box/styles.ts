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
  border-radius: 10px;
  box-shadow: ${(props: ItemBoxPropsType) =>
    props.shadow
      ? `rgba(50, 50, 93, 0.25) 0 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0 3px 7px -3px;`
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
