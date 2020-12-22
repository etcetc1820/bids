import { AppState } from "../../store/state";
import { Bid } from "./bidsForm.state";

export const getBids = ({ bidsState: { bids } }: AppState): Bid[] => bids;

export const getError = ({ bidsState: { error } }: AppState): string => error;

export const getId = ({ bidsState: { id } }: AppState): number | null => id;
