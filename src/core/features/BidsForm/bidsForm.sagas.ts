import { all, fork, take, call, put } from "@redux-saga/core/effects";
import { SagaIterator } from "@redux-saga/types";
import * as acts from "./bidsForm.actions";
import getBids from "../../api/bids";

// on GET_BIDS action we make a request for getting bids
function* getBidsRequest(): SagaIterator {
  yield take(acts.BidsFormActions.GET_BIDS);

  try {
    const res = yield call(getBids.GetBids);
    let bids = res?.data?.data?.bids?.data;
    bids = bids?.map(
      (bid: { driver: { full_name: string }; id: number; amount: number }) => ({
        id: bid.id,
        amount: bid.amount,
        fullName: bid.driver.full_name,
      })
    );

    yield put(new acts.UpdateBids(bids));
  } catch (e) {
    yield put(new acts.UpdateError(e.message));
  }
}

export default function* root(): SagaIterator {
  yield all([fork(getBidsRequest)]);
}
