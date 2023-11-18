import {
  getDayName,
  getDayNumberAndMonth,
  year,
} from "@/app/lib/getDateInCatalan";

const DayOfTheMonth = () => {
  const dateInCatalan = getDayNumberAndMonth();
  const weekDay = getDayName();

  return (
    <time
      dateTime={dateInCatalan}
      className="flex flex-row place-content-between text-7xl items-end pt-[62px] px-8 "
    >
      <div>
        <span>{weekDay}</span>
        <br />
        <span>{dateInCatalan}</span>
      </div>
      <span>{year}</span>
    </time>
  );
};

export default DayOfTheMonth;
