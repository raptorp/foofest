import React from "react";
import { useContext, useState, useEffect } from "react";
import TicketsContext from "../../../context/ticketsContext";
import law from "./campingAddOns.module.css";
import ThirdTitle from "../../../components/ThirdTitle/ThirdTitle";
import Link from "next/link";
import Image from "next/image";

import svartheimImg from "../../../public/imgs/campImgs/svartheim.jpg";

import {
  RxPlusCircled,
  RxMinusCircled,
  RxQuestionMarkCircled,
} from "react-icons/rx";

import {
  Bs2Circle,
  Bs3Circle,
  Bs4Circle,
  Bs5Circle,
  BsCheckCircle,
} from "react-icons/bs";

import BuyFlowLayout from "../../../components/BuyFlowLayout/BuyFlowLayout";

function campingAddOns() {
  // bring context to this page

  const globalMoneyContext = useContext(TicketsContext);

  // store href for "back" btn at the end
  const goBackBtnHref = "../../camping/" + globalMoneyContext.selectedCamp;

  // this is the cost of tickets from the previous page

  const theTicketsCost = globalMoneyContext.costOfTickets;

  // this is the cost of camping

  const [camping, setCamping] = useState(0);

  // this is the cost of tickets plus tents

  function addTentCostToTickets() {
    globalMoneyContext.setTicketsPlusTents(
      (theTicketsCost) => theTicketsCost + camping + vat
    );
  }

  // store num of personal tents as state

  const [personalTents, setPersonalTents] = useState(0);

  // onClick functions for increasing and reducing the num of personal tents, max 4

  function addPersonalTent() {
    if (personalTents < 4) {
      setPersonalTents((old) => old + 1);
      setNumOfTents((old) => old + 1);
    }
  }

  function subtractPersonalTent() {
    if (personalTents > 0) {
      setPersonalTents((old) => old - 1);
      setNumOfTents((old) => old - 1);
    }
  }

  // store num of EcoSwamp tents as state

  const [ecoSwampTents, setEcoSwampTents] = useState(0);

  // onClick functions for increasing and reducing the num of EcoSwamp tents, max 4

  function addEcoSwamp() {
    if (ecoSwampTents < 4) {
      setEcoSwampTents((old) => old + 1);
      setNumOfTents((old) => old + 1);
    }
  }

  function subtractEcoSwamp() {
    if (ecoSwampTents > 0) {
      setEcoSwampTents((old) => old - 1);
      setNumOfTents((old) => old - 1);
    }
  }

  // store num of SwampLux for 2 people as state

  const [swampLuxForTwo, setSwampLuxForTwo] = useState(0);

  // onClick functions for increasing and reducing the num of EcoSwamp tents, max 4

  function addSwampLuxForTwo() {
    if (swampLuxForTwo < 4) {
      setSwampLuxForTwo((old) => old + 1);
      setNumOfTents((old) => old + 1);
    }
  }

  function subtractSwampLuxForTwo() {
    if (swampLuxForTwo > 0) {
      setSwampLuxForTwo((old) => old - 1);
      setNumOfTents((old) => old - 1);
    }
  }

  // store num of SwampLux for 3 people as state

  const [swampLuxForThree, setSwampLuxForThree] = useState(0);

  // onClick functions for increasing and reducing the num of EcoSwamp tents, max 4

  function addSwampLuxForThree() {
    if (swampLuxForThree < 4) {
      setSwampLuxForThree((old) => old + 1);
      setNumOfTents((old) => old + 1);
    }
  }

  function subtractSwampLuxForThree() {
    if (swampLuxForThree > 0) {
      setSwampLuxForThree((old) => old - 1);
      setNumOfTents((old) => old - 1);
    }
  }

  // store num of tents selected, despite which ones

  const [numOfTents, setNumOfTents] = useState(0);

  // store cost of tent vat

  const [vat, setVat] = useState(0);

  // store total in this page, to later add it as a global value

  const [campingAllInclusive, setCampingAllInclusive] = useState(0);

  useEffect(() => {
    setCampingAllInclusive(camping + vat + theTicketsCost);
    setCamping(
      swampLuxForThree * 399 + swampLuxForTwo * 299 + ecoSwampTents * 249
    );
    setVat(Math.floor(camping / 25));
    globalMoneyContext.setTicketsPlusTents(campingAllInclusive);
    globalMoneyContext.setTotalCampingCost(camping);
    globalMoneyContext.setGlobalVat((oldVat) => oldVat + vat);
  }, [vat, camping, swampLuxForThree, swampLuxForTwo, ecoSwampTents]);

  return (
    <BuyFlowLayout>
      <div className={law.contentAndBasket}>
        <div className={law.content}>
          <div className={law.imageContainer}>
            <Image
              className={law.imgStyle}
              src={svartheimImg}
              sizes="(max-width: 1920px) 100vw, 750px"
              alt="/"
            />
          </div>
          <div className={law.campInfo}>
            <ThirdTitle thirdTitle="Camping add-ons" />
            <p className={law.description}>
              Esse minim dolor nostrud Lorem proident cupidatat aliqua proident
              sunt minim ut amet aliquip ex.
            </p>
          </div>
          <div className={law.addContainer}>
            <h3 className={law.addTitle}>How would you like to camp?</h3>

            <div className={law.typeAndButtons}>
              <div className={law.typeText}>
                <p>
                  Use your own tent
                  <RxQuestionMarkCircled size={16} />
                </p>
                <span>Free</span>
              </div>
              <div className={law.typeButtons}>
                <RxMinusCircled
                  size={32}
                  onClick={subtractPersonalTent}
                  className={law.selectIcons}
                />
                <span>{personalTents}</span>
                <RxPlusCircled
                  size={32}
                  onClick={addPersonalTent}
                  className={law.selectIcons}
                />
              </div>
            </div>

            <div className={law.typeAndButtons}>
              <div className={law.typeText}>
                <p>
                  EcoSwamp Camping
                  <RxQuestionMarkCircled size={16} />
                </p>
                <span>+249.00 kr. pr tent</span>
              </div>
              <div className={law.typeButtons}>
                <RxMinusCircled
                  size={32}
                  onClick={subtractEcoSwamp}
                  className={law.selectIcons}
                />
                <span>{ecoSwampTents}</span>
                <RxPlusCircled
                  size={32}
                  onClick={addEcoSwamp}
                  className={law.selectIcons}
                />
              </div>
            </div>

            <div className={law.typeAndButtons}>
              <div className={law.typeText}>
                <p>
                  SwampLux for 2 people
                  <RxQuestionMarkCircled size={16} />
                </p>
                <span>+299.00 kr. per tent</span>
              </div>
              <div className={law.typeButtons}>
                <RxMinusCircled
                  size={32}
                  onClick={subtractSwampLuxForTwo}
                  className={law.selectIcons}
                />
                <span>{swampLuxForTwo}</span>
                <RxPlusCircled
                  size={32}
                  onClick={addSwampLuxForTwo}
                  className={law.selectIcons}
                />
              </div>
            </div>

            <div className={law.typeAndButtons}>
              <div className={law.typeText}>
                <p>
                  SwampLux for 3 people
                  <RxQuestionMarkCircled size={16} />
                </p>
                <span>+399.00 kr. per tent</span>
              </div>
              <div className={law.typeButtons}>
                <RxMinusCircled
                  size={32}
                  onClick={subtractSwampLuxForThree}
                  className={law.selectIcons}
                />
                <span>{swampLuxForThree}</span>
                <RxPlusCircled
                  size={32}
                  onClick={addSwampLuxForThree}
                  className={law.selectIcons}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={law.basketContainer}>
          <h3 className={law.orderTitle}>Order Summary</h3>

          <div className={law.ticketAmountContainer}>
            <span>Tickets:</span>
            <span className={law.ticketNum}>
              {globalMoneyContext.howManyTickets}
            </span>
          </div>

          <div className={law.ticketsContainer}>
            <span>Ticket(s)</span>
            <span className={law.ticketNum}>{theTicketsCost} kr.</span>
          </div>

          <div className={law.campingContainer}>
            <span>Camping</span>
            <span className={law.ticketNum}>{camping} kr.</span>
          </div>

          <div className={law.vatContainer}>
            <span>VAT</span>
            <span className={law.vatNum}>{vat} kr.</span>
          </div>

          <div className={law.totalContainer}>
            <span>Total</span>
            <span className={law.totalNum}>
              {globalMoneyContext.ticketsPlusTents} kr.
            </span>
          </div>
        </div>
      </div>
      <div className={law.flowNav}>
        <div className={law.backNextButtons}>
          <Link href={goBackBtnHref}>
            <button className={law.backButton}>GO BACK</button>
          </Link>

          <Link href="/buyingStage/ticketHolderInfo">
            <button
              className={law.nextButton}
              disabled={numOfTents == 0 ? true : false}
            >
              NEXT STEP
            </button>
          </Link>
        </div>
        <div className={law.stepNum}>
          <BsCheckCircle className={law.checkedStep} size={24} />
          <Bs2Circle className={law.currentStep} size={24} />
          <Bs3Circle className={law.lowOpacity} size={24} />
          <Bs4Circle className={law.lowOpacity} size={24} />
          <Bs5Circle className={law.lowOpacity} size={24} />
        </div>
      </div>
    </BuyFlowLayout>
  );
}

export default campingAddOns;
