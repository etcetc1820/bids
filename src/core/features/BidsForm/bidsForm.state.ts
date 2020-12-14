export type Bid = { id: number; amount: number; fullName: string };

export interface BidsFormState {
  bids: Bid[] | [];
  error: string;
  id: null | number;
}
