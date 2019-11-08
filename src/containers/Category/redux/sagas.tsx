import { call, put, takeLatest } from "redux-saga/effects";
import isEmpty from "lodash/isEmpty";

import { receiveCategoryData } from "./actions";
import { REQUEST_CATEGORY_DATA, REQUEST_CREATE_CATEGORY } from "./types";
import { fetchCategoryData, fetchCreateCategory } from "./api";

export function* getCategoryData() {
  try {
    // do api call
    const data = yield call(fetchCategoryData);
    yield put(receiveCategoryData(data));
  } catch (e) {
    console.log(e);
  }
}

export function* createCategory(action: any) {
  try {
    // do api call
    if (!isEmpty(action.data)) {
      yield call(fetchCreateCategory, action.data);
    }
  } catch (e) {
    console.log(e);
  }
}

export function* categorySagas() {
  yield takeLatest(REQUEST_CATEGORY_DATA, getCategoryData);
}

export function* categoryCreateSagas() {
  yield takeLatest(REQUEST_CREATE_CATEGORY, createCategory);
}
