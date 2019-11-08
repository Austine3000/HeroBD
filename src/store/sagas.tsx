import { all, fork } from "redux-saga/effects";

import * as businessSagas from "../containers/Business/redux/sagas";
import * as categorySagas from "../containers/Category/redux/sagas";
import * as userSagas from "../containers/Auth/redux/sagas";

export default function* rootSaga() {
  yield all(
    [
      ...Object.values(businessSagas),
      ...Object.values(categorySagas),
      ...Object.values(userSagas)
    ].map(fork)
  );
}
