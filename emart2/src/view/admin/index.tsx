import { SideBarContainer } from "@/component/side-bar/container/styles";
import SideBarItem from "@/component/side-bar/item";
import React from "react";
import * as S from "./styles";

const AdminPage = () => {
  const menuList = [
    {
      name: "사이트 관리",
      redirect: "/admin/website",
    },
    { name: "시스템 관리", redirect: "/admin/system" },
    { name: "서버 관리", redirect: "/admin/server" },
    { name: "사용자 관리", redirect: "/admin/user" },
    //{ name: "메뉴 관리", redirect: "/admin/menu" },
  ];
  return (
    <S.AdminContainer>
      <SideBarContainer>
        {menuList.map((menu, idx) => {
          return <SideBarItem item={menu} key={idx} />;
        })}
      </SideBarContainer>

      <S.InfoContainer>
        <S.Title>관리</S.Title>
      </S.InfoContainer>
    </S.AdminContainer>
  );
};

export default AdminPage;
