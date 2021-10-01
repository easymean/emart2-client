import { createReducer } from "typesafe-actions";

import {
  GET_USER_INFO,
  GET_USER_INFO_ERROR,
  GET_USER_INFO_SUCCESS,
} from "./actions";
import { UserAction, UserState } from "./types";

const initialState: UserState = {
  loading: false,
  error: null,
  data: null,
};

const userReducer = createReducer<UserState, UserAction>(initialState, {
  [GET_USER_INFO]: (state) => {
    return {
      ...state,
      loading: true,
      error: null,
    };
  },
  [GET_USER_INFO_SUCCESS]: (state, action) => {
    return {
      ...state,
      loading: false,
      data: action.payload,
    };
  },
  [GET_USER_INFO_ERROR]: (state, action) => {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  },
});
export default userReducer;
