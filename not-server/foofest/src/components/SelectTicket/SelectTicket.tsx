import React from "react";
import law from "./SelectTicket.module.css";
import ThirdTitle from "../ThirdTitle/ThirdTitle";

import {
  RxPlusCircled,
  RxMinusCircled,
  RxQuestionMarkCircled,
} from "react-icons/rx";

const SelectTicket = () => {
  return (
    <div>
      <div className={law.campInfo}>
        <ThirdTitle thirdTitle="SVARTHEIM" />
        <p className={law.description}>
          Unveil the enchanting nights beneath a sky ablaze with stars.
          Svartheim offers a secluded sanctuary in the heart of the festival,
          inviting you to unwind and connect with your fellow festival-goers
          amidst a tranquil woodland backdrop.
        </p>
      </div>
      <div className={law.addSectionContainer}>
        <h3 className={law.addTitle}>Select your tickets</h3>

        <div className={law.typeAndButtons}>
          <div className={law.typeText}>
            <p>
              Regular <RxQuestionMarkCircled size={16} />
            </p>
            <span>799.00 kr. pr. ticket</span>
          </div>
          <div className={law.typeButtons}>
            <p>Regular</p>
            <span>799.00 kr. pr. ticket</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectTicket;
