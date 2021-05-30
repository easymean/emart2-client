import React from "react";
import { AccountItemProps } from "./types";
import * as S from "./styles";

import { CommonItemBox } from "@/component/item-box/item-box-styles";

const AccountItem = ({ account }: AccountItemProps) => {
  return (
    <CommonItemBox>
      <S.ServerName> {account.server_name}</S.ServerName>
      <S.ServerInfo>
        {account.server_ip}
        <br></br>
        ID {account.server_id} <br></br>
        PWD {account.server_password}
      </S.ServerInfo>
    </CommonItemBox>
  );
};

export default AccountItem;
