"use client";
import findActualDaySchedule from "@/app/lib/findActualDay";
import createWeekDays from "@/app/lib/getFormattedCalendar";
import { WeekInfo } from "@/app/types";
import { KeyboardEvent, useCallback, useEffect, useState } from "react";
import ScheduledShowsList from "./ScheduledShowsList";

interface DaySelectorProps {
  scheduledShows: WeekInfo;
  children?: React.ReactNode;
}

const DaySelector = ({ scheduledShows }: DaySelectorProps) => {
  const { actualDay } = findActualDaySchedule(scheduledShows);
  const [shownSchedule, setShownSchedule] = useState(actualDay);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  useEffect(() => {
    setShownSchedule(actualDay);
  }, [actualDay, scheduledShows]);

  const twoAirtimeWeeks = createWeekDays();
  const wholeWeekFormatted = twoAirtimeWeeks.slice(0, 7);

  const handleClick = useCallback(
    (dayName: string) => {
      const weekSchedule = scheduledShows[dayName as keyof WeekInfo];

      setShownSchedule(weekSchedule);
      setSelectedDay(dayName);
    },
    [scheduledShows]
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent, dayName: string) => {
      if (event.key === "Enter" || event.key === " ") {
        handleClick(dayName);
      }
    },
    [handleClick]
  );

  return (
    <>
      <ul className="flex flex-row  text-xl justify-between pt-14 pb-6 px-8 weekdays">
        {wholeWeekFormatted.map((day, index) => (
          <li
            role="menuitem"
            tabIndex={0}
            key={index}
            onClick={() => handleClick(day.dayName)}
            onKeyDown={(e) => handleKeyDown(e, day.dayName)}
            className={`cursor-pointer w-min animate-pulse hover:animate-duration-500 hover:animate-ease-in-out ${
              selectedDay === day.dayName
                ? "text-black"
                : "opacity-40 active:opacity-100"
            }`}
          >
            {day.formattedDay}
          </li>
        ))}
      </ul>
      <ScheduledShowsList schedule={shownSchedule} />
    </>
  );
};

export default DaySelector;
