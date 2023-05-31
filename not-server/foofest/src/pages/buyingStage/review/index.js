import React from "react";
import { useContext, useState, useRef } from "react";
import TicketsContext from "../../../context/ticketsContext";
import law from "./review.module.css";
import ThirdTitle from "../../../components/ThirdTitle/ThirdTitle";
import Link from "next/link";

import supabase from "../../../utils/supabaseClient";

import { Bs5Circle, BsCheckCircle } from "react-icons/bs";

import BuyFlowLayout from "../../../components/BuyFlowLayout/BuyFlowLayout";

function index() {
  // use a ref for the checkbox

  const agreeCheckbox = useRef();

  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  function toggleCheckbox() {
    setIsCheckboxChecked(!isCheckboxChecked);
  }

  // bring context to this page

  const globalMoneyContext = useContext(TicketsContext);

  // SEND INFO TO DATABASE

  // send confirmation ID to endpoint "/fullfill-reservation" through a POST REQUEST WITH
  // PAYLOAD OF

  // {
  //	"id":"sktwi6kwl1d9e787"
  // }

  //

  async function sendInformationToDatabase() {
    const payload = {
      id: `${globalMoneyContext.globalReservationId}`,
    };

    const url =
      "https://fierce-veiled-exception.glitch.me/fullfill-reservation";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "text/plain",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error: " + response.status);
        }
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // insert information about the ticket holders and delivery info to our own database

    const { data, error } = await supabase.from("swampfest").insert({
      reservation_id: globalMoneyContext.globalReservationId,
      number_of_tickets: globalMoneyContext.howManyTickets,
      people: globalMoneyContext.globalFormName,
      email: globalMoneyContext.globalFormEmail,
      delivery: globalMoneyContext.deliveryObject,
      camp: globalMoneyContext.selectedCamp,
    });
    if (error) throw error;
    //  router.push("/success");
  }

  return (
    <BuyFlowLayout>
      <div className={law.contentAndBasket}>
        <div className={law.content}>
          <div className={law.campInfo}>
            <ThirdTitle thirdTitle="ORDER REVIEW" />
            <p className={law.description}>
              Review your purchase before approving it.
            </p>
          </div>
        </div>

        <div className={law.basketContainer}>
          <h3 className={law.orderTitle}>Order Summary</h3>

          <div className={law.ticketsContainer}>
            <span>Ticket(s)</span>
            <span className={law.ticketNum}>
              {globalMoneyContext.costOfTickets} kr.
            </span>
          </div>

          <div className={law.campingContainer}>
            <span>Camping</span>
            <span className={law.ticketNum}>
              {globalMoneyContext.totalCampingCost} kr.
            </span>
          </div>

          <div className={law.itemTotalContainer}>
            <span>Item(s)</span>
            <span className={law.ticketNum}>
              {globalMoneyContext.ticketsPlusTents} kr.
            </span>
          </div>

          <div className={law.feeContainer}>
            <span>Booking fee</span>
            <span className={law.ticketNum}>99.00 kr</span>
          </div>

          <div className={law.deliveryContainer}>
            <span>Delivery</span>
            <span className={law.ticketNum}>24.00 kr</span>
          </div>

          <div className={law.vatContainer}>
            <span>VAT</span>
            <span className={law.ticketNum}>
              {globalMoneyContext.globalVat} kr
            </span>
          </div>

          <div className={law.totalContainer}>
            <span>Order total</span>
            <span className={law.totalNum}>
              {globalMoneyContext.ticketsPlusTents + 99 + 24} kr.
            </span>
          </div>
        </div>

        <div className={law.termsContainer}>
          <input
            ref={agreeCheckbox}
            checked={isCheckboxChecked}
            type="checkbox"
            onClick={toggleCheckbox}
          />

          <label className={law.termsLabel}>
            I've read and accepted the terms of sales and delivery.
          </label>
        </div>
      </div>

      <div className={law.flowNav}>
        <div className={law.backNextButtons}>
          <Link href="/buyingStage/checkout">
            <button className={law.backButton}>GO BACK</button>
          </Link>

          <Link href="/buyingStage/success">
            <button
              className={law.nextButton}
              disabled={isCheckboxChecked ? false : true}
            >
              PLACE ORDER
            </button>
          </Link>
        </div>
        <div className={law.stepNum}>
          <BsCheckCircle className={law.checkedStep} size={24} />
          <BsCheckCircle className={law.checkedStep} size={24} />
          <BsCheckCircle className={law.checkedStep} size={24} />
          <BsCheckCircle className={law.checkedStep} size={24} />

          <Bs5Circle className={law.currentStep} size={24} />
        </div>
      </div>
    </BuyFlowLayout>
  );
}

export default index;
