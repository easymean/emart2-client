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
    //err.response.data -> res.message에 메세지 있음
    if (!err.status) {
      //Network error
      throw new Error("Network Error");
    } else if (err.status == "401") {
      //Error handling
    }
    //못잡으면 err를 리턴
    console.log("못잡은 에러");
    return Promise.reject(err);
  }
);

export default instance;
