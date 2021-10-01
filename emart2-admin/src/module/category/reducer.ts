import { createReducer } from "typesafe-actions";
import {
  GET_CATEGORY_LIST,
  GET_CATEGORY_LIST_ERROR,
  GET_CATEGORY_LIST_SUCCESS,
} from "./actions";
import { CategoryModel } from "@model/cateoryModel";
import { CategoryAction, CategoryState } from "./types";

const initialState: CategoryState = {
  loading: false,
  error: null,
  data: null,
};

const categoryReducer = createReducer<CategoryState, CategoryAction>(
  initialState,
  {
    [GET_CATEGORY_LIST]: (state) => {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },
    [GET_CATEGORY_LIST_SUCCESS]: (state, action) => {
      const { data: previousData } = state;
      let newCategoryList = [] as CategoryModel[];

      if (previousData) {
        newCategoryList = [...previousData.concat()];
        return {
          ...state,
          loading: false,
          data: newCategoryList,
        };
      }
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    },
    [GET_CATEGORY_LIST_ERROR]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
  }
);
export default categoryReducer;
