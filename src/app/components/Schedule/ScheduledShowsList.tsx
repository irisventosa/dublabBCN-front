"use client";
import { AirtimeShow } from "@/app/types";
import React from "react";
import ScheduledBsideShow from "./ScheduledBsideShow";
import ScheduledShow from "./ScheduledShowDesktop";
import ScheduledShowMobile from "./ScheduledShowMobile";

interface ScheduledShowsListProps {
  schedule: AirtimeShow[];
  children?: React.ReactNode;
}

const ScheduledShowsList = ({
  schedule,
}: ScheduledShowsListProps): React.ReactElement => {
  // const scheduleByHours: AirtimeShow[] =
  //   schedule &&
  //   schedule.filter(
  //     (show) =>
  //       parseInt(extractAndFormatShowDate(show.end_timestamp)) > currentHour
  //   );

  const mobileBreakPoint = 640;

  const isMobile =
    typeof window !== "undefined" && window.innerWidth < mobileBreakPoint;

  return (
    <ul>
      {schedule.map((show, listPosition) => (
        <>
          <li key={show.name} className="text">
            {show.name.startsWith("b-side") ? (
              <ScheduledBsideShow
                airtimeShow={show}
                listPosition={listPosition}
              />
            ) : isMobile ? (
              <ScheduledShowMobile
                airtimeShow={show}
                listPosition={listPosition}
              />
            ) : (
              <ScheduledShow airtimeShow={show} listPosition={listPosition} />
            )}
          </li>
          <hr className="w-full border-black" />
        </>
      ))}
    </ul>
  );
};

export default ScheduledShowsList;
