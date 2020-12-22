import React from "react";
import "./bidItem.scss";

interface BidItemInterface {
  fullName: string;
  amount: number;
  date: Date;
}

const BidItem: React.FunctionComponent<BidItemInterface> = ({
  fullName,
  amount,
  date,
}) => {
  return (
    <li>
      {fullName} ${amount} {date.toISOString()}
    </li>
  );
};

export default BidItem;
