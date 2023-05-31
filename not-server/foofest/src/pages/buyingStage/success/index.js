import React from "react";
import law from "./success.module.css";
import Link from "next/link";
import ThirdTitle from "../../../components/ThirdTitle/ThirdTitle";
import BuyFlowLayout from "../../../components/BuyFlowLayout/BuyFlowLayout";

function index() {
  return (
    <BuyFlowLayout>
      <div className={law.content}>
        <div className={law.campInfo}>
          <ThirdTitle thirdTitle="Thank you for your purchase!" />
          <p className={law.description}>
            We've sent the tickets to the provided address/email.
          </p>
        </div>

        <Link href="/">
          <button className={law.nextButton}>HOME</button>
        </Link>
      </div>
    </BuyFlowLayout>
  );
}

export default index;
