import { BidsFormState } from "./bidsForm.state";
import * as acts from "./bidsForm.actions";

const initialState: BidsFormState = {
  bids: [],
  error: "",
  id: null,
};

const reducer = (
  state = initialState,
  action: acts.BidsFormActionsTypes
): BidsFormState => {
  switch (action.type) {
    // set user ID
    case acts.BidsFormActions.SET_ID:
      return {
        ...state,
        id: action.payload,
      };
    // if in payload we have an array than merge current state and payload,
    // if we already placed a bid than we update it
    // otherwise we pushed a new bid
    case acts.BidsFormActions.CREATE_OR_UPDATE_BIDS:
      let bids = [...state.bids];
      const foundIndex = bids.findIndex((bid) => bid.id === state.id);

      if (Array.isArray(action.payload)) {
        bids = [...bids, ...action.payload];
      } else if (foundIndex === -1) {
        bids.push(action.payload);
      } else {
        bids[foundIndex].amount = action.payload.amount;
      }

      return {
        ...state,
        bids,
        error: "",
      };
    // set an error if we have an error on request for getting bids
    case acts.BidsFormActions.CREATE_OR_UPDATE_BIDS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    // remove bid by user id
    case acts.BidsFormActions.REMOVE_BID:
      const updatedBids = state.bids.filter((bid) => bid.id !== state.id);

      return {
        ...state,
        bids: [...updatedBids],
      };
    default:
      return state;
  }
};

export default reducer;
