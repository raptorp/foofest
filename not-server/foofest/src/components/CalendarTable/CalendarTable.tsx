import React, { useState, useEffect } from "react";
import law from "./CalendarTable.module.css";
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
    const festivalData = `http://https://fierce-veiled-exception.glitch.me//schedule`;

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
      <section className={law.sauronSection}>
        <nav className={law.nav}>
          <ul className={law.ul}>
            <li
              className={activeIndex === 0 ? law.underlinedBeauty : ""}
              onClick={() => changeDay("mon", 0)}
            >
              Mon
            </li>
            <li
              className={activeIndex === 1 ? law.underlinedBeauty : ""}
              onClick={() => changeDay("tue", 1)}
            >
              Tue
            </li>
            <li
              className={activeIndex === 2 ? law.underlinedBeauty : ""}
              onClick={() => changeDay("wed", 2)}
            >
              Wed
            </li>
            <li
              className={activeIndex === 3 ? law.underlinedBeauty : ""}
              onClick={() => changeDay("thu", 3)}
            >
              Thu
            </li>
            <li
              className={activeIndex === 4 ? law.underlinedBeauty : ""}
              onClick={() => changeDay("fri", 4)}
            >
              Fri
            </li>
            <li
              className={activeIndex === 5 ? law.underlinedBeauty : ""}
              onClick={() => changeDay("sat", 5)}
            >
              Sat
            </li>
            <li
              className={activeIndex === 6 ? law.underlinedBeauty : ""}
              onClick={() => changeDay("sun", 6)}
            >
              Sun
            </li>
          </ul>
        </nav>

        <section className={law.tableSection}>
          <section className={law.stagesOutsideTable}>
            <h3 className={law.sceneTitle}>Midgard</h3>
            <h3 className={law.sceneTitle}>Vanaheim</h3>
            <h3 className={law.sceneTitle}>Jotunheim</h3>
          </section>

          <table className={law.table}>
            <thead className={law.tableHeader}>
              <tr className={law.tableTime}>
                {/* <th className={law.specificTime}>00:00</th> */}
                <th className={law.specificTime}>00:00</th>
                <th className={law.specificTime}>02:00</th>
                <th className={law.specificTime}>04:00</th>
                <th className={law.specificTime}>06:00</th>
                <th className={law.specificTime}>08:00</th>
                <th className={law.specificTime}>10:00</th>
                <th className={law.specificTime}>12:00</th>
                <th className={law.specificTime}>14:00</th>
                <th className={law.specificTime}>16:00</th>
                <th className={law.specificTime}>18:00</th>
                <th className={law.specificTime}>20:00</th>
                <th className={law.specificTime}>22:00</th>
              </tr>
            </thead>

            <tbody className={law.tableBody}>
              <tr className={law.midgardActRow}>
                {midgard.map((el) => {
                  return (
                    <td className={law.midgardAct} key={el.id}>
                      <h4 className={law.actName}>{el.act}</h4>
                      <p className={law.actTime}>
                        {el.start} - {el.end}
                      </p>
                    </td>
                  );
                })}
              </tr>

              <tr className={law.vanaheimActRow}>
                {vanaheim.map((el) => {
                  return (
                    <td className={law.vanaheimAct} key={el.id}>
                      <h4 className={law.actName}>{el.act}</h4>
                      <p className={law.actTime}>
                        {el.start} - {el.end}
                      </p>
                    </td>
                  );
                })}
              </tr>

              <tr className={law.jotunheimActRow}>
                {jotunheim.map((el) => {
                  return (
                    <td className={law.jotunheimAct} key={el.id}>
                      <h4 className={law.actName}>{el.act}</h4>
                      <p className={law.actTime}>
                        {el.start} - {el.end}
                      </p>
                    </td>
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
