import { LoginModel, SignupModel } from "@/model/authModel";
import axios from "./axios";
import endpoints from "./endpoints";

const authAPI = {
  signup: async (signup: SignupModel) => {
    await axios.post(`${endpoints.AUTH_API}/signup`, signup);
  },

  login: async (login: LoginModel): Promise<string> => {
    const { data: message } = await axios.post(
      `${endpoints.AUTH_API}/login`,
      login
    );

    return message;
  },
};

export default authAPI;
