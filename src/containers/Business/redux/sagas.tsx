import { call, put, takeLatest } from "redux-saga/effects";

import { receiveBusinessLogData } from "./actions";
import { REQUEST_BUSINESS_LOG_DATA, SEARCH_BUSINESS_LOG_DATA } from "./types";
import { fetchBusinessLogData, fetchBusinessSearchData } from "./api";

export function* getBusinessLogData() {
  try {
    // do api call
    const data = yield call(fetchBusinessLogData);
    yield put(receiveBusinessLogData(data));
  } catch (e) {
    console.log(e);
  }
}

export function* searchBusinessLog(action: any) {
  try {
    // do api call
    const data = yield call(fetchBusinessSearchData, action.data);
    yield put(receiveBusinessLogData(data));
  } catch (e) {
    console.log(e);
  }
}

export function* auditSagas() {
  yield takeLatest(REQUEST_BUSINESS_LOG_DATA, getBusinessLogData);
}

export function* auditsearchSagas() {
  yield takeLatest(SEARCH_BUSINESS_LOG_DATA, searchBusinessLog);
}
