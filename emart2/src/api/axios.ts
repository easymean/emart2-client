import axios from "axios";
import endpoints from "./endpoints";

const instance = axios.create({
  baseURL: endpoints.API_BASE_URL,
  withCredentials: true,
  headers: {},
});

instance.interceptors.response.use(
  (res) => Promise.resolve(res.data),
  (err) => Promise.reject(err)
);

export default instance;
