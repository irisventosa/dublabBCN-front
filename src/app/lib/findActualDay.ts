import { WeekInfo } from "../types";
import { date } from "./getDateInCatalan";

const findActualDay = (schedule: WeekInfo) => {
  const dayPosition = date.getDay();
  const airtimeDays = Object.values(schedule);
  let actualDayIndex = airtimeDays.findIndex(
    (day, index) => index === dayPosition
  );

  if (dayPosition === 0) {
    actualDayIndex = 7;
  }

  const actualDay = airtimeDays[actualDayIndex - 1];

  return actualDay;
};

export default findActualDay;
