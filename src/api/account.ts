import axios from "./axios";
import endpoints from "./endpoints";
import AccountModel from "@/model/accountModel";

const accountAPI = {
  getPublicAccountList: async (): Promise<AccountModel[]> => {
    const { data: publicAccountList } = await axios.get<AccountModel[]>(
      endpoints.ACCOUNT_API
    );

    return publicAccountList;
  },
};

export default accountAPI;
