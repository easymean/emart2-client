import { call, put, takeEvery } from "redux-saga/effects";

import userAPI from "@/api/user";
import { UserModel } from "@/model/userModel";
import { getUserInfoAsync, GET_USER_INFO } from ".";

function* getUserInfoSaga(action: ReturnType<typeof getUserInfoAsync.request>) {
  try {
    const uesrInfo: UserModel = yield call(userAPI.getUserInfo);
    yield put(getUserInfoAsync.success(uesrInfo));
  } catch (e) {
    yield put(getUserInfoAsync.failure(e));
  }
}

export function* userSaga() {
  yield takeEvery(GET_USER_INFO, getUserInfoSaga);
}
