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
      <SideBar />
      <S.FullLayout>
        <Header />
        <S.LayoutContainer>{children}</S.LayoutContainer>
        <Footer />
      </S.FullLayout>
    </S.Layout>
  );
};

export default Layout;
