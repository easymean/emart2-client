import { useCookies } from "react-cookie";
import { setCookie } from "@/api/axios";
export const useCookie = () => {
  const [token] = useCookies(["accessToken"]);
  const { accessToken } = token;
  setCookie(accessToken);

  return {
    accessToken,
  };
};
