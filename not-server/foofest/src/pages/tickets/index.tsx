import React from "react";
import MainTitle from "../../components/MainTitle/MainTitle";
import tickets from "./tickets.module.css";
import { useState, useEffect } from "react";
import CampCard from "../../components/CampCard/CampCard";

function Tickets() {
  return (
    <div className={tickets.main}>
      <MainTitle mainTitle="TICKETS" />

      <section className={tickets.campGrid}>
        <CampCard
          title="SVARTHEIM"
          bio="Unveil the enchanting nights beneath a sky ablaze with stars."
        />

        <CampCard
          title="NILFHEIM"
          bio="Enter Nilfheim, where serenity meets excitement."
        />

        <CampCard
          title="HELHEIM"
          bio="Immerse yourself in the vibrant spirit of Helheim."
        />

        <CampCard
          title="MUSPELHEIM"
          bio="Welcome to Muspelheim, where the fire of the festival burns brightest."
        />

        <CampCard
          title="ALFHEIM"
          bio="Step into Alfheim, a magical enclave filled with whimsical charm."
        />
      </section>
    </div>
  );
}

export default Tickets;
