import React from "react";
import { useContext, useState, useEffect } from "react";
import TicketsContext from "../../../context/ticketsContext";
import law from "./checkout.module.css";
import ThirdTitle from "../../../components/ThirdTitle/ThirdTitle";
import Link from "next/link";

import { SiPaypal, SiKlarna, SiStartrek } from "react-icons/si";

import {
  BsCreditCard,
  Bs4Circle,
  Bs5Circle,
  BsCheckCircle,
} from "react-icons/bs";

import BuyFlowLayout from "../../../components/BuyFlowLayout/BuyFlowLayout";

function checkout() {
  // bring context to this page

  const globalMoneyContext = useContext(TicketsContext);

  // build an object that will store the delivery details

  const [user, setUser] = useState({
    name: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    email: "",
    phone: "",
  });

  function handleInputs(event) {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });

    console.log(user);
  }

  useEffect(() => {
    globalMoneyContext.setDeliveryObject(user);
  }, [user]);

  // CREATE COLLAPSIBLE

  //  const Collapsible = ({ title, children }) => {
  //    const [isCollapsed, setIsCollapsed] = useState(true);

  //    const toggleCollapse = () => {
  //      // toggle collapse
  //     setIsCollapsed(!isCollapsed);

  //    };

  //    return (
  //      <div className={law.collapseDiv}>
  //        <button className={law.collapseDivBtn} onClick={toggleCollapse}>
  //          {isCollapsed ? title + " +" : title + " -"}
  //        </button>
  //        {!isCollapsed && !fillingForm && <div>{children}</div>}
  //      </div>
  //    );
  //  };

  // check which payment method has been chosen

  const [isChecked, setIsChecked] = useState(0);

  function checkMe(id) {
    setIsChecked(id);
  }

  return (
    <BuyFlowLayout>
      <div className={law.contentAndBasket}>
        <div className={law.content}>
          <div className={law.campInfo}>
            <ThirdTitle thirdTitle="Checkout" />
            <p className={law.description}>
              Choose delivery and payment options.
            </p>
          </div>
          <div className={law.addContainer}>
            <h3 className={law.addTitle}>Delivery</h3>
            <form className={law.form}>
              <div className={law.inputContainer}>
                <div className={law.nameContainer}>
                  <label className={law.fullNameLabel}>Full name</label>
                  <input
                    type="text"
                    name="name"
                    className={law.fullName}
                    value={user.name}
                    onChange={handleInputs}
                    placeholder="Fiona Charming"
                    required
                  />
                </div>

                <div className={law.streetContainer}>
                  <label className={law.streetLabel}>Street & Number</label>
                  <input
                    type="text"
                    name="address"
                    className={law.street}
                    value={user.address}
                    onChange={handleInputs}
                    placeholder="Ingerslevsgade 146"
                    required
                  />
                </div>

                <div className={law.zipCityCountryContainer}>
                  <div className={law.zipContainer}>
                    <label className={law.zipLabel}>Zip code</label>
                    <input
                      type="number"
                      name="zipCode"
                      className={law.zip}
                      value={user.zipCode}
                      onChange={handleInputs}
                      placeholder="1705"
                      required
                    />
                  </div>

                  <div className={law.cityContainer}>
                    <label className={law.cityLabel}>City</label>
                    <input
                      type="text"
                      name="city"
                      className={law.city}
                      value={user.city}
                      onChange={handleInputs}
                      placeholder="Copenhagen"
                      required
                    />
                  </div>

                  <div className={law.countryContainer}>
                    <label className={law.countryLabel}>Country</label>
                    <input
                      type="text"
                      name="country"
                      className={law.country}
                      value={user.country}
                      onChange={handleInputs}
                      placeholder="Denmark"
                      required
                    />
                  </div>
                </div>

                <div className={law.emailPhoneContainer}>
                  <div className={law.emailContainer}>
                    <label className={law.emailLabel}>Email</label>
                    <input
                      type="text"
                      name="email"
                      className={law.email}
                      value={user.email}
                      onChange={handleInputs}
                      placeholder="fiona@charming"
                      required
                    />
                  </div>

                  <div className={law.phoneContainer}>
                    <label className={law.phoneLabel}>Phone Number</label>
                    <input
                      type="number"
                      name="phone"
                      className={law.phone}
                      value={user.phone}
                      onChange={handleInputs}
                      placeholder="52221989"
                      required
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className={law.addContainer}>
            <h3 className={law.addTitle}>Payment</h3>
            <div className={law.inputContainer}>
              <form className={law.form}>
                <h4 className={law.paymentSubtitle}>Select payment method</h4>

                <div className={law.paymentMethods}>
                  <label
                    className={
                      isChecked == 1 ? law.payWithThis : law.notPayingWithThis
                    }
                    onClick={() => checkMe(1)}
                  >
                    Credit/Debit card
                  </label>

                  <label
                    className={
                      isChecked == 2 ? law.payWithThis : law.notPayingWithThis
                    }
                    onClick={() => checkMe(2)}
                  >
                    Paypal
                  </label>

                  <label
                    className={
                      isChecked == 3 ? law.payWithThis : law.notPayingWithThis
                    }
                    onClick={() => checkMe(3)}
                  >
                    Mobile Pay
                  </label>

                  <label
                    className={
                      isChecked == 4 ? law.payWithThis : law.notPayingWithThis
                    }
                    onClick={() => checkMe(4)}
                  >
                    Klarna
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className={law.basketContainer}>
          <h3 className={law.orderTitle}>Order Summary</h3>

          <div className={law.ticketAmountContainer}>
            <span>Tickets:</span>
            <span className={law.orderNumOfTickets}>
              {globalMoneyContext.howManyTickets}
            </span>
          </div>

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

          {/* <div className={law.vatContainer}>
            <span>VAT</span>
            <span className={law.vatNum}>{vat} kr.</span>
          </div> */}

          <div className={law.totalContainer}>
            <span>Total</span>
            <span className={law.totalNum}>
              {globalMoneyContext.ticketsPlusTents} kr.
            </span>
          </div>
        </div>
      </div>

      {/*   
       
        <Collapsible title="HOME" typeOfDelivery="home"> */}

      {/*   </Collapsible> 

        <Collapsible title="ONLINE" typeOfDelivery="online"> 

        <form className={law.sendTicketsOnline}>
              
              <div className={law.sendTicketsOnlineFullName}>

                <label>Full Name</label>
                <input
                placeholder='Fiona Charming'
                />

              </div>

              <div className={law.sendTicketsOnlineEmail}>

                <label>Email</label>
                <input
                placeholder='fiona@charming'
                />

              </div>

          </form>


      </Collapsible> */}

      <div className={law.flowNav}>
        <div className={law.backNextButtons}>
          <Link href="/buyingStage/ticketHolderInfo">
            <button className={law.backButton}>GO BACK</button>
          </Link>

          <Link href="/buyingStage/review">
            <button
              className={law.nextButton}
              disabled={
                user.name == "" ||
                user.address == "" ||
                user.zipCode == "" ||
                user.city == "" ||
                user.country == "" ||
                user.email == "" ||
                user.phone == ""
                  ? true
                  : false
              }
            >
              REVIEW ORDER
            </button>
          </Link>
        </div>
        <div className={law.stepNum}>
          <BsCheckCircle className={law.checkedStep} size={24} />
          <BsCheckCircle className={law.checkedStep} size={24} />
          <BsCheckCircle className={law.checkedStep} size={24} />
          <Bs4Circle className={law.currentStep} size={24} />
          <Bs5Circle className={law.lowOpacity} size={24} />
        </div>
      </div>
    </BuyFlowLayout>
  );
}

export default checkout;
