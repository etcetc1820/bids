export type Bid = {
  id: number;
  amount: number;
  fullName: string;
  createAt: Date;
};

export interface BidsFormState {
  bids: Bid[];
  error: string;
  id: null | number;
  sort: "createAt" | "amount";
}
