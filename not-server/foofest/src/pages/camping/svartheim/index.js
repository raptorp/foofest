import React from "react";
import { useEffect, useState, useContext } from "react";

import law from "../camping.module.css";

import ThirdTitle from "../../../components/ThirdTitle/ThirdTitle";

import Link from "next/link";
import TicketsContext from "../../../context/ticketsContext";
import Image from "next/image";

import svartheimImg from "../../../public/imgs/campImgs/svartheim.jpg";

import {
  RxPlusCircled,
  RxMinusCircled,
  RxQuestionMarkCircled,
} from "react-icons/rx";

import {
  Bs1CircleFill,
  Bs1Circle,
  Bs2CircleFill,
  Bs2Circle,
  Bs3CircleFill,
  Bs3Circle,
  Bs4CircleFill,
  Bs4Circle,
  Bs5CircleFill,
  Bs5Circle,
  BsCheckCircleFill,
  BsCheckCircle,
} from "react-icons/bs";

import BuyFlowLayout from "../../../components/BuyFlowLayout/BuyFlowLayout";

function svartheim() {
  // bring context to this page

  const globalMoneyContext = useContext(TicketsContext);

  // THIS IS TO GET THE ID FROM THE ENDPOINT, BRING LOWER LATER

  // when the user clicks on one of the cards, we have to send a get request
  // and fetch an ID that we'll store in our database at the end of the
  // buying process

  // onClick event triggers a get request to "/reserve-spot" (this is inside of the checkavailability function)

  // we store the id as global context

  const [storeReservationId, setStoreReservationId] = useState(null);

  // in the last approval of the purchase we send a POST request to the endpoint "/fullfill-reservation"

  function modifyGlobalMoneyContext() {
    globalMoneyContext.setCostOfTickets(totalCost);
  }

  // STORE AVAILABLE SPOTS

  const [availableSpots, setAvailableSpots] = useState([]);

  useEffect(() => {
    const api = `http://localhost:8080/available-spots`;

    let fetchRes = fetch(api);
    fetchRes
      .then((res) => res.json())
      .then((spots) => {
        setAvailableSpots(spots[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  //

  // store num of tickets as state

  const [regularTickets, setRegularTickets] = useState(0);

  // onClick functions for increasing and reducing the num of tickets, max 4

  function addRegTicket() {
    if (regularTickets < 4) {
      setRegularTickets((old) => old + 1);
    }
  }

  function subtractRegTicket() {
    if (regularTickets > 0) {
      setRegularTickets((old) => old - 1);
    }
  }

  // store num of VIP tickets as state

  const [vipTickets, setVipTickets] = useState(0);

  // onClick functions for increasing and reducing the num of VIP tickets, max 4

  function addVipTicket() {
    if (vipTickets < 4) {
      setVipTickets((old) => old + 1);
    }
  }

  function subtractVipTicket() {
    if (vipTickets > 0) {
      setVipTickets((old) => old - 1);
    }
  }

  // store cost of ticket total

  const [ticketCost, setTicketCost] = useState(0);

  const [vat, setVat] = useState(0);

  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    setTicketCost(799 * regularTickets + 1299 * vipTickets);
    setVat(Math.floor(totalCost / 25));
    setTotalCost(ticketCost + vat);

    modifyGlobalMoneyContext();

    globalMoneyContext.setHowManyTickets(regularTickets + vipTickets);

    globalMoneyContext.setGlobalVat((oldVat) => oldVat + vat);
  }, [regularTickets, vipTickets, totalCost, ticketCost, vat]);

  // CHECK IF AMOUNT OF TICKETS IS BIGGER THAN TICKETS AVAILABLE

  function checkAvailability() {
    globalMoneyContext.setSelectedCamp("svartheim");
    if (regularTickets + vipTickets > availableSpots.available) {
      console.log(
        `There are not enough tickets available. Available tickets: ${availableSpots.available} `
      );
    } else {
      // GET RESERVATION ID FROM ENDPOINT "/reserve-spot" WITH A PUT REQUEST

      const payload = {
        area: "Svartheim",
        amount: globalMoneyContext.howManyTickets,
      };

      const url = "http://localhost:8080/reserve-spot";

      fetch(url, {
        method: "PUT",
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
          console.log(
            response,
            globalMoneyContext.howManyTickets,
            storeReservationId,
            response.id
          );
          globalMoneyContext.setGlobalReservationId(response.id);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }

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
            <ThirdTitle thirdTitle="SVARTHEIM" />
            <p className={law.description}>
              Unveil the enchanting nights beneath a sky ablaze with stars.
              Svartheim offers a secluded sanctuary in the heart of the
              festival, inviting you to unwind and connect with your fellow
              festival-goers amidst a tranquil woodland backdrop.
            </p>
          </div>
          <div className={law.addContainer}>
            <h3 className={law.addTitle}>Select your tickets</h3>

            <div className={law.typeAndButtons}>
              <div className={law.typeText}>
                <p>
                  Regular <RxQuestionMarkCircled size={16} />
                </p>
                <span>799.00 kr. pr. ticket</span>
              </div>
              <div className={law.typeButtons}>
                <RxMinusCircled
                  size={32}
                  onClick={subtractRegTicket}
                  className={law.selectIcons}
                />
                <span>{regularTickets}</span>
                <RxPlusCircled
                  size={32}
                  onClick={addRegTicket}
                  className={law.selectIcons}
                />
              </div>
            </div>

            <div className={law.typeAndButtons}>
              <div className={law.typeText}>
                <p>
                  VIP <RxQuestionMarkCircled size={16} />
                </p>
                <span>1299.00 kr. pr. ticket</span>
              </div>
              <div className={law.typeButtons}>
                <RxMinusCircled
                  size={32}
                  onClick={subtractVipTicket}
                  className={law.selectIcons}
                />
                <span>{vipTickets}</span>
                <RxPlusCircled
                  size={32}
                  onClick={addVipTicket}
                  className={law.selectIcons}
                />
              </div>
            </div>
            <div className={law.overallSpots}>
              <span className={law.availableSpots}>
                Tickets left in this area: {availableSpots.available}
              </span>
            </div>
          </div>
        </div>

        <div className={law.basketContainer}>
          <h3 className={law.orderTitle}>Order Summary</h3>
          <div className={law.ticketsContainer}>
            <span>Ticket(s)</span>
            <span className={law.ticketNum}>{ticketCost} kr.</span>
          </div>

          <div className={law.vatContainer}>
            <span>VAT</span>
            <span className={law.vatNum}>{vat} kr.</span>
          </div>

          <div className={law.totalContainer}>
            <span>Total</span>
            <span className={law.totalNum}>{totalCost} kr.</span>
          </div>
        </div>
      </div>

      <div className={law.flowNav}>
        <div className={law.backNextButtons}>
          <Link href="/tickets">
            <button className={law.backButton}>GO BACK</button>
          </Link>

          <Link href="/buyingStage/campingAddOns" onClick={checkAvailability}>
            <button
              className={law.nextButton}
              disabled={globalMoneyContext.howManyTickets == 0 ? true : false}
            >
              NEXT STEP
            </button>
          </Link>
        </div>
        <div className={law.stepNum}>
          <Bs1Circle className={law.currentStep} size={24} />
          <Bs2Circle className={law.lowOpacity} size={24} />
          <Bs3Circle className={law.lowOpacity} size={24} />
          <Bs4Circle className={law.lowOpacity} size={24} />
          <Bs5Circle className={law.lowOpacity} size={24} />
        </div>
      </div>
    </BuyFlowLayout>
  );
}

export default svartheim;
