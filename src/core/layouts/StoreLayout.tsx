import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "../store/store";

interface Props {
  children: ReactNode;
}

const StoreLayout: React.FunctionComponent<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreLayout;
