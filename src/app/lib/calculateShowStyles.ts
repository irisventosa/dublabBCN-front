import extractAndFormatShowDate from "./extractAndFormatShowDate";

const calculateShowStyles = (
  startTimestamp: string,
  isListPositionLessThanOne: boolean
) => {
  const dayOfAppCalendar = new Date(startTimestamp).getDay();
  const broadcastTime: string = extractAndFormatShowDate(startTimestamp);

  const showStartHour = parseInt(broadcastTime);
  const currentHourOfDay = new Date().getHours();
  const isShowHour = currentHourOfDay === showStartHour;
  const isShowTimeNow = dayOfAppCalendar && isShowHour;

  const { onAirStyles, firstSeparatorLine, borderColor } =
    isListPositionLessThanOne && isShowTimeNow
      ? {
          onAirStyles: "flex flex-row h-[212px] w-full bg-black text-white",
          firstSeparatorLine: isListPositionLessThanOne,
          borderColor: "border border-white rounded-md pt-[5px] px-2 pb-[1px]",
        }
      : {
          onAirStyles: "flex flex-row h-[212px] w-full",
          firstSeparatorLine: isListPositionLessThanOne,
          borderColor: "border border-black rounded-md pt-[5px] px-2 pb-[1px]",
        };

  return { onAirStyles, firstSeparatorLine, borderColor };
};

export default calculateShowStyles;
