import { AxiosError } from "axios";
import { ActionType } from "typesafe-actions";

import * as actions from "./actions";
import { CategoryModel } from "@/model/cateoryModel";

export type CategoryAction = ActionType<typeof actions>;

export type CategoryState = {
  loading: boolean;
  error: AxiosError | null;
  data: CategoryModel[] | null;
};
