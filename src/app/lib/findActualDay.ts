import { AirtimeShow, WeekInfo } from "../types";
import { date } from "./getDateInCatalan";

const findActualDaySchedule = (schedule: WeekInfo) => {
  const dayPosition = date.getDay();
  const airtimeDays = Object.values(schedule);
  const actualDayIndex = airtimeDays.findIndex(
    (day, index) => index === dayPosition
  );

  const isSecondWeek = actualDayIndex >= 7 ? true : false;

  const actualDay: AirtimeShow[] = airtimeDays[actualDayIndex - 1];

  return { actualDay, isSecondWeek };
};

export default findActualDaySchedule;
