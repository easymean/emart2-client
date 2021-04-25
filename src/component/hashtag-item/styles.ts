import styled from "styled-components";

import { THEME_COLOR } from "@asset/constant";

export const Hashtag = styled.div`
  width: 100%;
  height: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.5rem;
  color: inherit;

  background-color: ${THEME_COLOR.LIGHT_GRAY};
  border-radius: 0.8rem;
  padding: 0.5rem 0.5rem;

  margin-right: 0.5rem;
`;

export const HashTagTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
