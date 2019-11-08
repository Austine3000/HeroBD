import { all, fork } from "redux-saga/effects";

import * as businessSagas from "../containers/Business/redux/sagas";
import * as categorySagas from "../containers/Category/redux/sagas";

export default function* rootSaga() {
  yield all(
    [...Object.values(businessSagas), ...Object.values(categorySagas)].map(fork)
  );
}
