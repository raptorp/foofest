import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./Line_up.module.css";
import MainTitle from "../../components/MainTitle/MainTitle";
import Stage from "../../components/Stage/Stage";
import Link from "next/link";
import CalendarTable from "../../components/CalendarTable/CalendarTable";
import LineupNav from "../../components/LineupNav/LineupNav";

function Line_up() {
  return (
    <div className={styles.container}>
      <MainTitle mainTitle="Schedule" />

      <section className={styles.stages}>
        <CalendarTable
        //   midgard={midgard}
        //   vanaheim={vanaheim}
        //   jotunheim={jotunheim}
        />
      </section>
    </div>
  );
}

export default Line_up;
