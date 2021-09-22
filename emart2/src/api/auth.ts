import { LoginModel, SignupModel } from "@/model/authModel";
import { UserModel } from "@/model/userModel";
import axios from "./axios";
import endpoints from "./endpoints";

const authAPI = {
  signup: async (signup: SignupModel): Promise<UserModel> => {
    const { data: userData } = await axios.post(
      `${endpoints.AUTH_API}/signup`,
      signup
    );
    return userData;
  },

  login: async (login: LoginModel) => {
    const { data } = await axios.post(`${endpoints.AUTH_API}/login`, login);
    return data;
  },

  logout: async () => {
    axios.defaults.headers.common["Authorization"] = "";
  },

  checkId: async (id: string): Promise<Boolean> => {
    const { data: res } = await axios.post(`${endpoints.AUTH_API}/unique`, id);
    return res;
  },
};

export default authAPI;
