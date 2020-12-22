import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../../shared/Input/Input";
import Button from "../../../shared/Button/Button";
import BidItem from "./Components/BidItem";
import * as acts from "../bidsForm.actions";
import { getBids, getError, getId } from "../bidsForm.selectors";
import { AppState } from "../../../store/state";
import "./bidsForm.scss";

const BidsForm: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const bids = useSelector((state: AppState) => getBids(state));
  const error = useSelector((state: AppState) => getError(state));
  const id = useSelector((state: AppState) => getId(state));
  const [amount, setAmount] = useState(0);
  const isPlaced = bids.some((bid) => bid.id === id);

  // get bids on init
  useEffect(() => {
    dispatch(new acts.GetBids());
  }, []);

  // set id on init
  useEffect(() => {
    dispatch(new acts.SetId(new Date().getTime()));
  }, []);

  // create or update new bid if we have an id
  const placeBid = (): void => {
    if (typeof id === "number") {
      dispatch(
        new acts.UpdateBids({
          id,
          amount: +amount,
          fullName: "You",
          createAt: new Date(),
        })
      );
    }
  };

  // change amount state on input change
  const handleAmount = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setAmount(+e.target.value);
  };

  // remove your bid from list
  const removeBid = (): void => {
    dispatch(new acts.RemoveBid());
  };

  return (
    <div className="bids-wrapper">
      {error.length > 0 ? (
        <p>Something went wrong. Please try again.</p>
      ) : (
        <>
          <h3>Existing bids:</h3>
          {bids.length > 0 ? (
            <ul>
              {bids.map((bid) => (
                <BidItem
                  key={bid.id}
                  fullName={bid.fullName}
                  amount={bid.amount}
                  date={bid.createAt}
                />
              ))}
            </ul>
          ) : (
            <p>No bits right now</p>
          )}
          <p>Your bid:</p>
          <Input
            value={amount}
            onChange={(e): void => {
              handleAmount(e);
            }}
            type="number"
          />
          <Button
            disabled={amount < 1}
            onClick={(): void => {
              placeBid();
            }}
          >
            {isPlaced ? "Update" : "Place Bid"}
          </Button>
          {isPlaced ? (
            <Button
              onClick={(): void => {
                removeBid();
              }}
            >
              Remove bid
            </Button>
          ) : null}
          <Button
            onClick={(): void => {
              dispatch(new acts.SortBy("createAt"));
            }}
          >
            Sort by Date
          </Button>
          <Button
            onClick={(): void => {
              dispatch(new acts.SortBy("amount"));
            }}
          >
            Sort by Price
          </Button>
        </>
      )}
    </div>
  );
};

export default BidsForm;
