import React from "react";

interface InputInterface {
  value?: string | number;
  type: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FunctionComponent<InputInterface> = ({
  value,
  type,
  onChange,
}) => <input type={type} value={value} onChange={onChange} />;
export default Input;
