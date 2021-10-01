import React from "react";
import * as S from "./styles";

import AccountContainer from "@/container/account-container/index";
import { CommonTitle } from "@/component/common/font-styles";

const AccountListPage = () => {
  return (
    <S.AccountLayout>
      <CommonTitle> 공용계정</CommonTitle>
      <AccountContainer />
      <CommonTitle>내계정</CommonTitle>
    </S.AccountLayout>
  );
};

export default AccountListPage;
