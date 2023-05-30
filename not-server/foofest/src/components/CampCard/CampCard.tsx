import styles from "./CampCard.module.css";
import Link from "next/link";

import React from "react";

function CampCard({ title, bio }) {
  return (
    <div className={styles.card}>
      <div className={styles.campDetails}>
        <span className={styles.swampfest}>SwampFest 2023</span>
        <h2 className={styles.campName}>{title}</h2>
        <p className={styles.bio}>{bio}</p>
        <span className={styles.info}>More info</span>
      </div>

      <div className={styles.moneyAndFee}>
        <span className={styles.money}>
          799 <span className={styles.kr}>KR.</span>
        </span>
        <span className={styles.fee}>+ fee</span>
      </div>
      <Link className={styles.button} href={`camping/${title.toLowerCase()}`}>
        BUY NOW
      </Link>
    </div>
  );
}

export default CampCard;
