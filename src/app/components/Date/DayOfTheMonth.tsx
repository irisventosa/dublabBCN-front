"use client";
import {
  getDayNameInCatalan,
  getDayNumberAndMonth,
} from "@/app/lib/getDateInCatalan";
import { useEffect, useState } from "react";

const DayOfTheMonth = () => {
  const todayDate = new Date();
  const [currentDate, setCurrentDate] = useState(todayDate);

  useEffect(() => {
    const updatedDate = new Date();
    setCurrentDate(updatedDate);
  }, []);

  const dateInCatalan = getDayNumberAndMonth(currentDate);
  const weekDay = getDayNameInCatalan(currentDate);

  const year = currentDate.getFullYear();

  const mobileBreakPoint = 640;
  const isMobile =
    typeof window !== "undefined" && window.innerWidth < mobileBreakPoint;

  return (
    <time
      dateTime={dateInCatalan}
      className="flex flex-row place-content-between text-7xl items-end pt-[62px] px-8 "
    >
      <div className="text-[32px] sm:text-[72px] ">
        <span>{weekDay}</span>
        <br />
        <span>{dateInCatalan}</span>
      </div>
      {!isMobile && <span>{year}</span>}
    </time>
  );
};

export default DayOfTheMonth;
