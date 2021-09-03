import axios from "axios";
import endpoints from "./endpoints";

const instance = axios.create({
  baseURL: endpoints.API_BASE_URL,
  withCredentials: true,
  headers: {},
});

instance.interceptors.response.use(
  (res) => {
    console.log(res);
    return Promise.resolve(res.data);
  },
  (err) => {
    console.log(err);
    return Promise.reject(err);
  }
);

export default instance;
