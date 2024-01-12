import {
  getDayNameInCatalan,
  getDayNumberAndMonth,
} from "@/app/lib/getDateInCatalan";

const DayOfTheMonth = () => {
  const currentDate = new Date();
  const dateInCatalan = getDayNumberAndMonth(currentDate);
  const weekDay = getDayNameInCatalan(currentDate);

  const year = currentDate.getFullYear();

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
