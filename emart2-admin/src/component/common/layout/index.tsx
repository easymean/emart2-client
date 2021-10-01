import React from "react";
import * as S from "./styles";

import Header from "@component/header";
import Footer from "@component/footer";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Layout>
      <Header />
      <S.LayoutContainer>{children}</S.LayoutContainer>
      <Footer />
    </S.Layout>
  );
};

export { Layout };
