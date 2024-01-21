import { AirtimeShow, WeekInfo } from "../types";
import { date } from "./getDateInCatalan";

const getWeekOfMonth = (date: Date) => {
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const dayOfWeek = firstDay.getDay();
  const diff = date.getDate() - firstDay.getDate() + dayOfWeek;

  return Math.ceil(diff / 7);
};

const findActualDaySchedule = (schedule: WeekInfo) => {
  const dayPosition = date.getDay();
  const airtimeDays = Object.values(schedule);

  const weekNumber = getWeekOfMonth(date);

  const isSecondWeek = weekNumber > 1;

  const adjustedDayPosition = dayPosition === 0 ? 6 : dayPosition - 1;

  const actualDay: AirtimeShow[] = airtimeDays[adjustedDayPosition];

  return { actualDay, isSecondWeek };
};

export default findActualDaySchedule;
