import { call, put, takeLatest } from "redux-saga/effects";
import isEmpty from "lodash/isEmpty";

import { receiveBusinessLogData } from "./actions";
import {
  REQUEST_BUSINESS_LOG_DATA,
  SEARCH_BUSINESS_LOG_DATA,
  REQUEST_CREATE_BUSINESS
} from "./types";
import {
  fetchBusinessLogData,
  fetchBusinessSearchData,
  fetchCreateBusinessData
} from "./api";

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

export function* createBusiness(action: any) {
  try {
    if (!isEmpty(action.data)) {
      yield call(fetchCreateBusinessData, action.data);
    }
  } catch (e) {
    console.log(e);
  }
}

export function* businessSagas() {
  yield takeLatest(REQUEST_BUSINESS_LOG_DATA, getBusinessLogData);
}

export function* createBusinessSagas() {
  yield takeLatest(REQUEST_CREATE_BUSINESS, createBusiness);
}

export function* businessSearchSagas() {
  yield takeLatest(SEARCH_BUSINESS_LOG_DATA, searchBusinessLog);
}
