import React from "react";
import StoreLayout from "./core/layouts/StoreLayout";
import BidsForm from "./core/features/BidsForm/Container/BidsForm";
import "./assets/scss/reset.scss";

const App: React.FunctionComponent = () => {
  return (
    <StoreLayout>
      <BidsForm />
    </StoreLayout>
  );
};

export default App;
