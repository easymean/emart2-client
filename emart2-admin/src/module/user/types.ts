import { AxiosError } from "axios";
import { ActionType } from "typesafe-actions";

import * as actions from "./actions";
import { UserModel } from "@/model/userModel";

export type UserAction = ActionType<typeof actions>;

export type UserState = {
  loading: boolean;
  error: AxiosError | null;
  data: UserModel | null;
};
