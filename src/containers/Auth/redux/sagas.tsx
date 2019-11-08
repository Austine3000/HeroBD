import { call, put, takeLatest } from "redux-saga/effects";

import { receiveLoginUserData } from "./actions";
import { REQUEST_USER_LOGIN } from "./types";
import { fetchLoginUser } from "./api";

export function* loginUser(action: any) {
  try {
    // do api call
    const data = yield call(fetchLoginUser, action.data);
    yield put(receiveLoginUserData(data));
  } catch (e) {
    console.log(e);
  }
}

export function* userSagas() {
  yield takeLatest(REQUEST_USER_LOGIN, loginUser);
}
