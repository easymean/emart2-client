import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 100vh; //height이 있으면 window.scrollY 인식이 안됨

  position: relative;
  overflow-y: scroll;
`;

export const LayoutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2rem 0;
  margin-top: 2rem;
`;

export const AdminLayout = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  position: relative;
`;
