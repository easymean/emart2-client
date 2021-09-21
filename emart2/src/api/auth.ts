import { LoginModel, SignupModel } from "@/model/authModel";
import { UserModel } from "@/model/userModel";
import axios from "./axios";
import endpoints from "./endpoints";

const authAPI = {
  signup: async (signup: SignupModel) => {
    await axios.post(`${endpoints.AUTH_API}/signup`, signup);
  },

  login: async (login: LoginModel) => {
    await axios.post(`${endpoints.AUTH_API}/login`, login);
  },

  logout: async () => {
    axios.defaults.headers.common["Authorization"] = "";
  },

  checkId: async (id: string): Promise<UserModel> => {
    const { data: userData } = await axios.post(`${endpoints.AUTH_API}/id`, id);
    return userData;
  },
};

export default authAPI;
