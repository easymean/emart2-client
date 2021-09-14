import axios from "axios";
import { useCookies } from "react-cookie";
import endpoints from "./endpoints";

const instance = axios.create({
  baseURL: endpoints.API_BASE_URL,
  withCredentials: true,
  headers: {},
});

instance.interceptors.response.use(
  (res) => {
    return Promise.resolve(res.data);
  },
  (err) => {
    //err.response.data -> res.message에 메세지 있음
    console.log(err);
    return Promise.reject(err);
  }
);

export default instance;
