import React from "react";
import * as S from "./styles";

import AccountContainer from "@/container/account-container/index";
import { CommonTitle } from "@/component/common/font-styles/styles";

const AccountListPage = () => {
  return (
    <>
      <CommonTitle> 공용계정</CommonTitle>
      <AccountContainer />
      <CommonTitle>내계정</CommonTitle>
    </>
  );
};

export default AccountListPage;
