import React from "react";
import * as S from "./styles";

import Header from "@component/header";
import Footer from "@component/footer";
import SideBar from "@/component/side-bar/container/index";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Layout>
      <Header />
      <S.SideBarWrapper>
        <SideBar />
        <S.LayoutContainer>{children}</S.LayoutContainer>
      </S.SideBarWrapper>
      <Footer />
    </S.Layout>
  );
};

export default Layout;
