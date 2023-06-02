import TicketHolderCard from "../../../components/TicketHolderCard/TicketHolderCard";
import React from "react";
import TicketsContext from "../../../context/ticketsContext";
import { useEffect, useState, useContext } from "react";
import law from "./ticketHolderInfo.module.css";

import ThirdTitle from "../../../components/ThirdTitle/ThirdTitle";
import Link from "next/link";

import { Bs3Circle, Bs4Circle, Bs5Circle, BsCheckCircle } from "react-icons/bs";

import BuyFlowLayout from "../../../components/BuyFlowLayout/BuyFlowLayout";

function ticketHolderInfo() {
  // grab local info of ticket holders

  const [formName, setFormName] = useState([]);
  const [formEmail, setFormEmail] = useState([]);

  // grab global number of tickets

  const globalTicketInfo = useContext(TicketsContext);

  const myArrayWithSlots = new Array();

  for (let i = 0; i < globalTicketInfo.howManyTickets; i++) {
    myArrayWithSlots.push(Math.random() * 10);
  }

  // store the cards as state

  const [cardStorage, setCardStorage] = useState([]);

  useEffect(() => {
    setCardStorage(myArrayWithSlots);
  }, []);

  // function to get the info of the holder from the form

  function retrieveHolderInfoName(num, name) {
    setFormName([...formName, { Person: num, name: name }]);
  }

  function retrieveHolderInfoEmail(num, email) {
    setFormEmail([...formEmail, { Person: num, email: email }]);
  }

  useEffect(() => {
    globalTicketInfo.setGlobalFormName(formName);
    globalTicketInfo.setGlobalFormEmail(formEmail);
  }, [formEmail, formName]);

  // cry

  return (
    <BuyFlowLayout>
      <div className={law.contentAndBasket}>
        <div className={law.content}>
          <div className={law.campInfo}>
            <ThirdTitle thirdTitle="TICKET HOLDER INFO" />
            <p className={law.description}>
              “Are we there yet..?” <br /> Not quite, but it’s goddamn close!
              Just need some information on each of you before we can let you
              send your order into the Fairyland eather
            </p>
          </div>

          <div className={law.addContainer}>

            {cardStorage.map((el) => {
              return (
                <div
                  className={law.cardsContainer}
                  key={cardStorage.indexOf(el) + 1}
                >
                  <TicketHolderCard
                    num={cardStorage.indexOf(el) + 1}
                    getName={retrieveHolderInfoName}
                    getEmail={retrieveHolderInfoEmail}
                  />
                </div>
              );
            })}
            {/* </div> */}
          </div>
        </div>
      </div>

      <div className={law.basketContainer}>
        <h3 className={law.orderTitle}>Order Summary</h3>

        <div className={law.ticketAmountContainer}>
          <span>Tickets:</span>
          <span className={law.ticketNum}>
            {globalTicketInfo.howManyTickets}
          </span>
        </div>

        <div className={law.ticketsContainer}>
          <span>Ticket(s)</span>
          <span className={law.ticketNum}>
            {globalTicketInfo.costOfTickets} kr.
          </span>
        </div>

        <div className={law.campingContainer}>
          <span>Camping</span>
          <span className={law.ticketNum}>
            {globalTicketInfo.totalCampingCost} kr.
          </span>
        </div>

        {/* <div className={law.vatContainer}>
          <span>VAT</span>
          <span className={law.vatNum}>{vat} kr.</span>
        </div> */}

        <div className={law.totalContainer}>
          <span>Total</span>
          <span className={law.totalNum}>
            {globalTicketInfo.ticketsPlusTents} kr.
          </span>
        </div>
      </div>

      <section className={law.details}></section>
      <div className={law.flowNav}>
        <div className={law.backNextButtons}>
          <Link href="/buyingStage/campingAddOns">
            <button className={law.backButton}>GO BACK</button>
          </Link>

          <Link href="/buyingStage/checkout">
            <button
              className={law.nextButton}
              disabled={
                formEmail.length === 0 || formName.length === 0 ? true : false
              }
            >
              NEXT STEP
            </button>
          </Link>
        </div>
        <div className={law.stepNum}>
          <BsCheckCircle className={law.checkedStep} size={24} />
          <BsCheckCircle className={law.checkedStep} size={24} />
          <Bs3Circle className={law.currentStep} size={24} />
          <Bs4Circle className={law.lowOpacity} size={24} />
          <Bs5Circle className={law.lowOpacity} size={24} />
        </div>
      </div>
    </BuyFlowLayout>
  );
}

export default ticketHolderInfo;
