import React from "react";
import Header from "../components/common/Header";
import ProductsServices from "../components/page2";

function Automations() {
  return (
    <div className="automations">
      <Header />
      <div className="automations-div">
        <ProductsServices />
        <h2>Automations</h2>
      </div>
    </div>
  );
}

export default Automations;
