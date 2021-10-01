import { call, put, takeEvery } from "redux-saga/effects";
import { getCategoryListAsync, GET_CATEGORY_LIST } from "./actions";

import categoryAPI from "@api/category";
import { CategoryModel } from "@model/cateoryModel";

function* getCategoryListSaga(
  action: ReturnType<typeof getCategoryListAsync.request>
) {
  try {
    const categoryList: CategoryModel[] = yield call(
      categoryAPI.getCategoryList
    );
    yield put(getCategoryListAsync.success(categoryList));
  } catch (e) {
    yield put(getCategoryListAsync.failure(e));
  }
}

export function* categorySaga() {
  yield takeEvery(GET_CATEGORY_LIST, getCategoryListSaga);
}
