import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 100%;
  height: 100vh;

  position: relative;
  overflow-y: scroll;
`;

export const LayoutMid = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2rem 8rem;
  margin-top: 2rem;
`;
