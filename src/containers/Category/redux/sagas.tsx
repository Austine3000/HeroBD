import { call, put, takeLatest } from "redux-saga/effects";

import { receiveCategoryData } from "./actions";
import { REQUEST_CATEGORY_DATA } from "./types";
import { fetchCategoryData } from "./api";

export function* getCategoryData() {
  try {
    // do api call
    const data = yield call(fetchCategoryData);
    yield put(receiveCategoryData(data));
  } catch (e) {
    console.log(e);
  }
}

export function* auditSagas() {
  yield takeLatest(REQUEST_CATEGORY_DATA, getCategoryData);
}
