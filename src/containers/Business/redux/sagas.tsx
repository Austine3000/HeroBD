import { call, put, takeLatest } from "redux-saga/effects";
import { isNumber, isEmpty } from "lodash";

import { receiveBusinessLogData, requestBusinessLogData } from "./actions";
import {
  REQUEST_BUSINESS_LOG_DATA,
  SEARCH_BUSINESS_LOG_DATA,
  REQUEST_CREATE_BUSINESS,
  DELETE_BUSINESS_DATA
} from "./types";
import {
  fetchBusinessLogData,
  fetchBusinessSearchData,
  fetchCreateBusinessData,
  fetchdeleteBusiness
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

export function* deleteBusiness(action: any) {
  try {
    if (isNumber(action.id)) {
      yield call(fetchdeleteBusiness, action.id);
      yield put(requestBusinessLogData());
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

export function* deleteBusinessSagas() {
  yield takeLatest(DELETE_BUSINESS_DATA, deleteBusiness);
}
