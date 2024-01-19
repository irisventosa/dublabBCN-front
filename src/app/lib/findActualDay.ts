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

  const actualDay: AirtimeShow[] = airtimeDays[dayPosition - 1];

  return { actualDay, isSecondWeek };
};

export default findActualDaySchedule;
