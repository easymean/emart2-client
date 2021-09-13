import { combineReducers } from "redux";
import { all } from "redux-saga/effects";

import { categorySaga } from "./category";
import category from "./category/reducer";
import { userSaga } from "./user";
import user from "./user/reducer";

const rootReducer = combineReducers({
  category,
  user,
});

export default rootReducer;

export function* rootSaga() {
  yield all([categorySaga(), userSaga()]);
}
export type RootState = ReturnType<typeof rootReducer>;
