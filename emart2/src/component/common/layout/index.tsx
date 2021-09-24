import React from "react";
import * as S from "./styles";
import { menuList as data } from "./mokdata";

import Header from "@component/header";
import Footer from "@component/footer";
import SideBarItem from "@/component/side-bar/item";
import { SideBarContainer } from "@/component/side-bar/container/styles";

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

const AdminLayout = ({ children }: LayoutProps) => {
  const menuList = data;
  return (
    <S.AdminLayout>
      <SideBarContainer>
        {menuList.map((menu, idx) => {
          return <SideBarItem item={menu} key={idx} />;
        })}
      </SideBarContainer>
      {children}
    </S.AdminLayout>
  );
};
export { Layout, AdminLayout };
