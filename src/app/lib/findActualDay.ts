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

  const actualDayIndex =
    weekNumber === 1 || weekNumber === 3 ? dayPosition : dayPosition + 6;

  const isSecondWeek = weekNumber > 1;

  const actualDay: AirtimeShow[] = airtimeDays[actualDayIndex - 1];

  return { actualDay, isSecondWeek };
};

export default findActualDaySchedule;
