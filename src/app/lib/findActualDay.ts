import { WeekInfo } from "../types";
import { date } from "./getDateInCatalan";

const findActualDay = (schedule: WeekInfo) => {
  const dayPosition = date.getDay();
  const airtimeDays = Object.values(schedule);
  const actualDayIndex = airtimeDays.findIndex(
    (day, index) => index === dayPosition
  );

  const actualDay = airtimeDays[actualDayIndex - 1];

  return actualDay;
};

export default findActualDay;
