import { AxiosError } from "axios";
import { createAsyncAction } from "typesafe-actions";

import { CategoryModel } from "@model/cateoryModel";

export const GET_CATEGORY_LIST = "category/GET_CATEGORY_LIST" as const;
export const GET_CATEGORY_LIST_SUCCESS =
  "category/GET_CATEGORY_LISTT_SUCCESS" as const;
export const GET_CATEGORY_LIST_ERROR =
  "category/GET_CATEGORY_LIST_ERROR" as const;

export const getCategoryListAsync = createAsyncAction(
  GET_CATEGORY_LIST,
  GET_CATEGORY_LIST_SUCCESS,
  GET_CATEGORY_LIST_ERROR
)<undefined, CategoryModel[], AxiosError>();
