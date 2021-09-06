import axios from "axios";
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
    const res = err.response.data;

    if (res.message == null) {
      return Promise.reject(err);
    } else {
      return Promise.reject(res.message);
    }
  }
);

export default instance;
