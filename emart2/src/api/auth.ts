import { LoginModel, SignupModel } from "@/model/authModel";
import axios from "./axios";
import endpoints from "./endpoints";

const authAPI = {
  signup: async (signup: SignupModel) => {
    try {
      await axios.post(`${endpoints.AUTH_API}/signup`, signup);
    } catch (e) {
      console.log(e);
      alert("회원가입실패");
    }
  },

  login: async (login: LoginModel) => {
    try {
      await axios.post(`${endpoints.AUTH_API}/login`, login);
    } catch (e) {
      console.log(e);
      alert("로그인 실패!");
    }
  },
};

export default authAPI;
