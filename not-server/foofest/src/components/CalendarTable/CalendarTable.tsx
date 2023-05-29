import React, { useState, useEffect } from "react";
import organize from "./CalendarTable.module.css";
import ThirdTitle from "../ThirdTitle/ThirdTitle";

interface ScheduleData {
  Midgard: {
    mon: Act[];
    tue: Act[];
    wed: Act[];
    thu: Act[];
    fri: Act[];
    sat: Act[];
    sun: Act[];
  };
  Vanaheim: {
    mon: Act[];
    tue: Act[];
    wed: Act[];
    thu: Act[];
    fri: Act[];
    sat: Act[];
    sun: Act[];
  };
  Jotunheim: {
    mon: Act[];
    tue: Act[];
    wed: Act[];
    thu: Act[];
    fri: Act[];
    sat: Act[];
    sun: Act[];
  };
}

interface Act {
  id: number;
  act: string;
  start: string;
  end: string;
}

function CalendarTable() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  let isUnderlined = "underline 10px solid var(--shrek)";
  let isNotUnderlined = "none";

  const [allSchedule, setAllSchedule] = useState<ScheduleData>({
    Midgard: {
      mon: [],
      tue: [],
      wed: [],
      thu: [],
      fri: [],
      sat: [],
      sun: [],
    },
    Vanaheim: {
      mon: [],
      tue: [],
      wed: [],
      thu: [],
      fri: [],
      sat: [],
      sun: [],
    },
    Jotunheim: {
      mon: [],
      tue: [],
      wed: [],
      thu: [],
      fri: [],
      sat: [],
      sun: [],
    },
  });

  const [midgard, setMidgard] = useState<Act[]>([]);
  const [vanaheim, setVanaheim] = useState<Act[]>([]);
  const [jotunheim, setJotunheim] = useState<Act[]>([]);

  useEffect(() => {
    const festivalData = `http://localhost:8080/schedule`;

    fetch(festivalData)
      .then((response) => response.json())
      .then((newData: ScheduleData) => {
        if (JSON.stringify(newData) !== JSON.stringify(allSchedule)) {
          setMidgard(newData.Midgard.mon);
          setVanaheim(newData.Vanaheim.mon);
          setJotunheim(newData.Jotunheim.mon);
          setAllSchedule(newData);
        }
      });
  }, [allSchedule]);

  function changeDay(day: string, index: number) {
    setActiveIndex(index);

    if (day === "mon") {
      setMidgard(allSchedule.Midgard.mon);
      setVanaheim(allSchedule.Vanaheim.mon);
      setJotunheim(allSchedule.Jotunheim.mon);
    } else if (day === "tue") {
      setMidgard(allSchedule.Midgard.tue);
      setVanaheim(allSchedule.Vanaheim.tue);
      setJotunheim(allSchedule.Jotunheim.tue);
    } else if (day === "wed") {
      setMidgard(allSchedule.Midgard.wed);
      setVanaheim(allSchedule.Vanaheim.wed);
      setJotunheim(allSchedule.Jotunheim.wed);
    } else if (day === "thu") {
      setMidgard(allSchedule.Midgard.thu);
      setVanaheim(allSchedule.Vanaheim.thu);
      setJotunheim(allSchedule.Jotunheim.thu);
    } else if (day === "fri") {
      setMidgard(allSchedule.Midgard.fri);
      setVanaheim(allSchedule.Vanaheim.fri);
      setJotunheim(allSchedule.Jotunheim.fri);
    } else if (day === "sat") {
      setMidgard(allSchedule.Midgard.sat);
      setVanaheim(allSchedule.Vanaheim.sat);
      setJotunheim(allSchedule.Jotunheim.sat);
    } else if (day === "sun") {
      setMidgard(allSchedule.Midgard.sun);
      setVanaheim(allSchedule.Vanaheim.sun);
      setJotunheim(allSchedule.Jotunheim.sun);
    }
  }

  return (
    <>
      <section className={organize.sauronSection}>
        <nav className={organize.nav}>
          <ul className={organize.ul}>
            <li
              className={activeIndex === 0 ? organize.underlinedBeauty : ""}
              onClick={() => changeDay("mon", 0)}
            >
              MON
            </li>
            <li
              className={activeIndex === 1 ? organize.underlinedBeauty : ""}
              onClick={() => changeDay("tue", 1)}
            >
              TUE
            </li>
            <li
              className={activeIndex === 2 ? organize.underlinedBeauty : ""}
              onClick={() => changeDay("wed", 2)}
            >
              WED
            </li>
            <li
              className={activeIndex === 3 ? organize.underlinedBeauty : ""}
              onClick={() => changeDay("thu", 3)}
            >
              THU
            </li>
            <li
              className={activeIndex === 4 ? organize.underlinedBeauty : ""}
              onClick={() => changeDay("fri", 4)}
            >
              FRI
            </li>
            <li
              className={activeIndex === 5 ? organize.underlinedBeauty : ""}
              onClick={() => changeDay("sat", 5)}
            >
              SAT
            </li>
            <li
              className={activeIndex === 6 ? organize.underlinedBeauty : ""}
              onClick={() => changeDay("sun", 6)}
            >
              SUN
            </li>
          </ul>
        </nav>

        <section className={organize.tableSection}>
          <section className={organize.stagesOutsideTable}>
            <ThirdTitle thirdTitle="MIDGARD" />
            <ThirdTitle thirdTitle="VANAHEIM" />
            <ThirdTitle thirdTitle="JOTUNHEIM" />
          </section>

          <table className={organize.table}>
            <thead className={organize.timeFrames}>
              <tr className={organize.specificTimeFrameZero}>
                <th>00:00</th>
                <th>02:00</th>
              </tr>

              <tr className={organize.specificTimeFrame}>
                <th>04:00</th>
              </tr>

              <tr className={organize.specificTimeFrame}>
                <th>06:00</th>
              </tr>

              <tr className={organize.specificTimeFrame}>
                <th>08:00</th>
              </tr>

              <tr className={organize.specificTimeFrame}>
                <th>10:00</th>
              </tr>

              <tr className={organize.specificTimeFrame}>
                <th>12:00</th>
              </tr>

              <tr className={organize.specificTimeFrame}>
                <th>14:00</th>
              </tr>

              <tr className={organize.specificTimeFrame}>
                <th>16:00</th>
              </tr>

              <tr className={organize.specificTimeFrame}>
                <th>18:00</th>
              </tr>

              <tr className={organize.specificTimeFrame}>
                <th>20:00</th>
              </tr>

              <tr className={organize.specificTimeFrame}>
                <th>22:00</th>
              </tr>

              <tr className={organize.specificTimeFrameLast}>
                <th>00:00</th>
              </tr>
            </thead>

            <tbody className={organize.tableBody}>
              <tr className={organize.midgardActRow}>
                {midgard.map((el) => {
                  return (
                    <div className={organize.midgardAct} key={el.id}>
                      <th>{el.act}</th>
                      <th>{el.start}</th>
                      <th>{el.end}</th>
                    </div>
                  );
                })}
              </tr>

              <tr className={organize.vanaheimActRow}>
                {vanaheim.map((el) => {
                  return (
                    <div className={organize.vanaheimAct} key={el.id}>
                      <th>{el.act}</th>
                      <th>{el.start}</th>
                      <th>{el.end}</th>
                    </div>
                  );
                })}
              </tr>

              <tr className={organize.jotunheimActRow}>
                {jotunheim.map((el) => {
                  return (
                    <div className={organize.jotunheimAct} key={el.id}>
                      <th>{el.act}</th>
                      <th>{el.start}</th>
                      <th>{el.end}</th>
                    </div>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </section>
      </section>
    </>
  );
}

export default CalendarTable;
