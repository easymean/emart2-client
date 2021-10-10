import axios from "axios";
import endpoints from "./endpoints";

const instance = axios.create({
  baseURL: endpoints.BASE_URL,
  withCredentials: true,
  headers: {},
});

export const setCookie = (token: string) => {
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

instance.interceptors.request.use((config) => {
  return config;
});

instance.interceptors.response.use(
  (res) => {
    return Promise.resolve(res.data);
  },
  (err) => {
    try {
      const res = err.response.data;

      if (res.error_type == "404") {
      }
      return Promise.reject(res.message);
    } catch {
      //못잡으면 err를 리턴
      console.log("못잡은 에러");
      return Promise.reject(err);
    }
  }
);

export default instance;
