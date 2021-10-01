import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/module";
import { getUserInfoAsync } from "@/module/user";
import { setCookie } from "@/api/axios";
export const useUser = () => {
  const [token] = useCookies(["accessToken"]);
  const { accessToken } = token;
  setCookie(accessToken);
  const dispatch = useDispatch();
  const {
    data: user,
    loading,
    error,
  } = useSelector((state: RootState) => state.user);

  const getUserInfo = () => {
    dispatch(getUserInfoAsync.request());
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return {
    user,
  };
};
