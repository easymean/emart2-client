import accountAPI from "@/api/account";
import AccountModel from "@/model/accountModel";
import { useCallback, useEffect, useState } from "react";

export const useAccount = () => {
  const [accountList, setAccountList] = useState([] as AccountModel[]);

  const getPublicAccountList = useCallback(async () => {
    const accountList = await accountAPI.getPublicAccountList();
    setAccountList(accountList);
  }, []);

  useEffect(() => {
    getPublicAccountList();
  }, []);
  return { accountList };
};
