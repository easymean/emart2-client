import userAPI from "@/api/user";
import { UserModel } from "@/model/userModel";
import { useQuery } from "react-query";

export const useUser = () => {
  return useQuery<UserModel, Error>("user", () => userAPI.getUserInfo(), {
    retry: 1,
  });
};
