import React from "react";
import * as S from "./styles";

import { AdminLayout } from "@component/common/layout";

const AdminPage = () => {
  return (
    <AdminLayout>
      <S.AdminContainer>
        <S.InfoContainer>
          <S.Title>관리</S.Title>
        </S.InfoContainer>
      </S.AdminContainer>
    </AdminLayout>
  );
};

export default AdminPage;
