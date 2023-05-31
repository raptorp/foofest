import React from "react";
import law from "./BuyFlowLayout.module.css";

const BuyFlowLayout = ({ children }) => {
  return (
    <div className={law.main}>
      <section className={law.container}>{children}</section>
    </div>
  );
};

export default BuyFlowLayout;
