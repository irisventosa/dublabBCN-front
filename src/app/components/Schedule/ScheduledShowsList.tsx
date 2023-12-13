"use client";
import { AirtimeShow } from "@/app/types";
import React from "react";
import ScheduledShow from "./ScheduledShow";
import ScheduledBsideShow from "./ScheduledBsideShow";
import extractAndFormatShowDate from "@/app/lib/extractAndFormatShowDate";
import { currentHour } from "@/app/lib/getDateInCatalan";

interface ScheduledShowsListProps {
  schedule: AirtimeShow[];
  children?: React.ReactNode;
}

const ScheduledShowsList = ({
  schedule,
}: ScheduledShowsListProps): React.ReactElement => {
  const scheduleByHours: AirtimeShow[] = schedule.filter(
    (show) =>
      parseInt(extractAndFormatShowDate(show.end_timestamp)) > currentHour
  );

  return (
    <ul>
      {scheduleByHours.map((show, listPosition) => (
        <>
          <li key={show.name} className="text">
            {show.name.startsWith("b-side") ? (
              <ScheduledBsideShow
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
