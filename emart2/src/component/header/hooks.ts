import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/module";
import { getUserInfoAsync } from "@/module/user";
import { useCookies } from "react-cookie";

export const useUser = () => {
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
