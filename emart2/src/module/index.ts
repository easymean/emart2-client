import { combineReducers } from "redux";
import { all } from "redux-saga/effects";

import { categorySaga } from "./category";
import category from "./category/reducer";

const rootReducer = combineReducers({
  category,
});

export default rootReducer;

export function* rootSaga() {
  yield all([categorySaga()]);
}
export type RootState = ReturnType<typeof rootReducer>;
