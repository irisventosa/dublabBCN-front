"use client";
import extractAndFormatShowDate from "@/app/lib/extractAndFormatShowDate";
import { currentHour } from "@/app/lib/getDateInCatalan";
import { AirtimeShow } from "@/app/types";
import React from "react";
import ScheduledBsideDesktop from "./ScheduledBsides/ScheduledBsideDesktop";
import ScheduledBsideMobile from "./ScheduledBsides/ScheduledBsideMobile";
import ScheduledShowDesktop from "./ScheduledShows/ScheduledShowDesktop";
import ScheduledShowMobile from "./ScheduledShows/ScheduledShowMobile";

interface ScheduledShowsListProps {
  schedule: AirtimeShow[];
  children?: React.ReactNode;
}

const ScheduledShowsList = ({
  schedule,
}: ScheduledShowsListProps): React.ReactElement => {
  const currentDayOfWeek = new Date().getDay();

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

  const mobileBreakPoint = 640;

  const isMobile =
    typeof window !== "undefined" && window.innerWidth < mobileBreakPoint;

  return (
    <ul>
      {scheduleByHours.map((show, listPosition) => (
        <>
          <li className="text">
            {show.name.startsWith("b-side") ? (
              isMobile ? (
                <ScheduledBsideMobile
                  airtimeShow={show}
                  listPosition={listPosition}
                />
              ) : (
                <ScheduledBsideDesktop
                  airtimeShow={show}
                  listPosition={listPosition}
                />
              )
            ) : isMobile ? (
              <ScheduledShowMobile
                airtimeShow={show}
                listPosition={listPosition}
              />
            ) : (
              <ScheduledShowDesktop
                airtimeShow={show}
                listPosition={listPosition}
              />
            )}
          </li>
          <hr className="w-full border-black" />
        </>
      ))}
    </ul>
  );
};

export default ScheduledShowsList;
