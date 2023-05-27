import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import MainTitle from "../components/MainTitle/MainTitle";
import stayOut from "../public/imgs/stayout.jpg";
import SecondaryTitle from "../components/SecondaryTitle/SecondaryTitle";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>SwampFest</title>
        <meta name="description" content="Generated by Shrek & Donkey" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {/*----------------- HERO SECTION----------------------- */}

        <section className={styles.heroSection}>
          <section>
            <MainTitle mainTitle="SWAMPFEST 2023" />

            <SecondaryTitle secondaryTitle="It's that swamp of the year" />
          </section>

          <section className={styles.shrekImgSection}>
            <Image
              className={styles.shrekImg}
              src={stayOut}
              alt="stay out img from Shrek"
            />
          </section>
        </section>

        {/*----------------- LINE UP SECTION----------------------- */}

        <section className={styles.lineup}>
          <SecondaryTitle secondaryTitle="LINE UP" />
        </section>

        {/*----------------- VOLUNTEERS SECTION----------------------- */}

        <section className={styles.volunteers}>
          <SecondaryTitle secondaryTitle="BECOME A VOLUNTEER" />
        </section>

        {/*----------------- TICKETS SECTION----------------------- */}

        <section className={styles.tickets}>
          <SecondaryTitle secondaryTitle="TICKETS" />
        </section>
      </main>
    </>
  );
}
