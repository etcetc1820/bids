import { Action } from "../../store/state";
import { Bid } from "./bidsForm.state";

export enum BidsFormActions {
  GET_BIDS = "[BidsForm] get bids",
  CREATE_OR_UPDATE_BIDS = "[BidsForm] create or update bids",
  CREATE_OR_UPDATE_BIDS_ERROR = "[BidsForm] create or update bids error",
  SET_ID = "[BidsForm] update id",
  REMOVE_BID = "[BidsFOrm] remove bid",
}

export class GetBids extends Action {
  readonly type = BidsFormActions.GET_BIDS;
}

export class UpdateBids extends Action {
  readonly type = BidsFormActions.CREATE_OR_UPDATE_BIDS;

  constructor(public payload: Bid | Bid[]) {
    super();
  }
}

export class UpdateError extends Action {
  readonly type = BidsFormActions.CREATE_OR_UPDATE_BIDS_ERROR;

  constructor(public payload: string) {
    super();
  }
}

export class SetId extends Action {
  readonly type = BidsFormActions.SET_ID;

  constructor(public payload: number | null) {
    super();
  }
}

export class RemoveBid extends Action {
  readonly type = BidsFormActions.REMOVE_BID;
}

export type BidsFormActionsTypes =
  | GetBids
  | UpdateBids
  | UpdateError
  | SetId
  | RemoveBid;
