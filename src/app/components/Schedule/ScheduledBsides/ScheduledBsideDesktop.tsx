"use client";
import extractAndFormatShowDate from "@/app/lib/extractAndFormatShowDate";
import { AirtimeShow } from "@/app/types";
import Image from "next/image";
import BroadcastTime from "../BroadcastTime";

interface ScheduledBsideDesktopProps {
  airtimeShow: AirtimeShow;
  listPosition: number;
}

const ScheduledBsideDesktop = ({
  airtimeShow,
  listPosition,
}: ScheduledBsideDesktopProps) => {
  const isListPositionLessThanOne = listPosition < 1;

  const currentDayOfWeek = new Date().getDay();
  const dayOfAppCalendar = new Date(airtimeShow.start_timestamp).getDay();
  const broadcastTime: string = extractAndFormatShowDate(
    airtimeShow.start_timestamp
  );

  const showStartHour = parseInt(broadcastTime);
  const currentHourOfDay = new Date().getHours();

  const isShowHour = currentHourOfDay === showStartHour;

  const { onAirStyles, firstSeparatorLine } =
    isListPositionLessThanOne &&
    currentDayOfWeek === dayOfAppCalendar &&
    isShowHour
      ? {
          onAirStyles: "flex flex-row h-[212px] w-full bg-black text-white",
          firstSeparatorLine: true,
        }
      : {
          onAirStyles: "flex flex-row h-[212px] w-full",
          firstSeparatorLine: isListPositionLessThanOne,
        };

  return (
    <>
      {firstSeparatorLine && <hr className="w-full border-black" />}
      <div className={onAirStyles}>
        <Image
          src={airtimeShow.description}
          alt={""}
          width={263}
          height={150}
          className="py-[31px] pl-8 object-cover"
        />
        <ul className="flex flex-col pl-[101px]">
          <li className="text-[32px] h-[47px] mt-[21px]">{airtimeShow.name}</li>
          <li className="text-[22px] h-[28px] ">{airtimeShow.url}</li>
          <li className="pt-[59px]"></li>
        </ul>
        <ul className="flex flex-col gap-[117px] items-end absolute right-0 p-[30px] ">
          <BroadcastTime broadcastTime={broadcastTime} />
        </ul>
      </div>
    </>
  );
};

export default ScheduledBsideDesktop;
