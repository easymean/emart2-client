import React from "react";

import * as S from "./styles";
import { useAccount } from "./hooks";
import AccountItem from "@/component/account-item";

const AccountContainer = () => {
  const { accountList } = useAccount();
  return accountList.length !== 0 ? (
    <S.AccountContainer>
      {accountList.map((item, idx) => (
        <AccountItem key={idx} account={item} />
      ))}
    </S.AccountContainer>
  ) : (
    <S.AccountContainer>공용 계정이 없습니다.</S.AccountContainer>
  );
};

export default AccountContainer;
