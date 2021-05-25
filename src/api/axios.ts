import axios from "axios";
import Cookies from "js-cookie";
import endpoints from "./endpoints";

// const csrftoken = Cookies.get("csrftoken");
const instance = axios.create({
  baseURL: endpoints.API_BASE_URL,
  withCredentials: true,
  headers: {},
});

instance.interceptors.response.use(
  (res) => Promise.resolve(res),
  (err) => Promise.reject(err)
);

export default instance;
