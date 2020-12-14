import { BidsFormState } from "../features/BidsForm/bidsForm.state";

export interface AppState {
  bidsState: BidsFormState;
}

export class Action {
  readonly type: string | undefined;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toJSON(): Record<string, any> {
    return { ...this };
  }
}
