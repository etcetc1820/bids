import { all, fork } from "redux-saga/effects";

import bidsSagas from "../features/BidsForm/bidsForm.sagas";

function* rootSaga(): Generator {
  yield all([fork(bidsSagas)]);
}

export default rootSaga;
