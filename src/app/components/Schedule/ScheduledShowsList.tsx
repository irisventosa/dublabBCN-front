"use client";
import extractAndFormatShowDate from "@/app/lib/extractAndFormatShowDate";
import { currentHour } from "@/app/lib/getDateInCatalan";
import useMobileComponent from "@/app/lib/hooks/useMobileComponent";
import { AirtimeShow } from "@/app/types";
import React from "react";
import ShowComponent from "./ShownShow";

interface ScheduledShowsListProps {
  schedule: AirtimeShow[];
  children?: React.ReactNode;
}

const ScheduledShowsList = ({
  schedule,
}: ScheduledShowsListProps): React.ReactElement => {
  const currentDayOfWeek = new Date().getDay();
  const mobileComponent = useMobileComponent();

  const scheduleByHours: AirtimeShow[] =
    schedule &&
    schedule.filter((show) => {
      const endTimestamp = parseInt(
        extractAndFormatShowDate(show.end_timestamp)
      );
      const showDayOfWeek = new Date(show.end_timestamp).getDay();

      if (showDayOfWeek === currentDayOfWeek) {
        return endTimestamp > currentHour;
      }

      return schedule;
    });

  return (
    <ul>
      {scheduleByHours.map((show, listPosition) => (
        <>
          <li className="text">
            {show ? (
              <ShowComponent
                show={show}
                listPosition={listPosition}
                isMobile={mobileComponent}
              />
            ) : (
              <div>Informació no disponible</div>
            )}
          </li>
          <hr className="w-full border-black" />
        </>
      ))}
    </ul>
  );
};

export default ScheduledShowsList;
