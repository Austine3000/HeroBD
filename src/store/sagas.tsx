import { all, fork } from "redux-saga/effects";

import * as auditSagas from "../containers/Business/redux/sagas";

export default function* rootSaga() {
  yield all([...Object.values(auditSagas)].map(fork));
}
