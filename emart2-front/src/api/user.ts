import { UserModel } from "@/model/userModel";
import axios from "./axios";
import endpoints from "./endpoints";

const userAPI = {
  getUserInfo: async (): Promise<UserModel> => {
    const { data: userInfo } = await axios.get<UserModel>(
      endpoints.MY_INFO_API
    );
    return userInfo;
  },
};

export default userAPI;
