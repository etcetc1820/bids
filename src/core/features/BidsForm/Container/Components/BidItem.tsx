import React from "react";
import "./bidItem.scss";

interface BidItemInterface {
  fullName: string;
  amount: number;
}

const BidItem: React.FunctionComponent<BidItemInterface> = ({
  fullName,
  amount,
}) => {
  return (
    <li>
      {fullName} ${amount}
    </li>
  );
};

export default BidItem;
