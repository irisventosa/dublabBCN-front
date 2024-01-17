"use client";
import extractAndFormatShowDate from "@/app/lib/extractAndFormatShowDate";
import { AirtimeShow } from "@/app/types";
import Image from "next/image";
import BroadcastTime from "../BroadcastTime";

interface ScheduledBsideMobileProps {
  airtimeShow: AirtimeShow;
  listPosition: number;
}

const ScheduledBsideMobile = ({
  airtimeShow,
  listPosition,
}: ScheduledBsideMobileProps) => {
  const firstLine = listPosition < 1;
  const broadcastTime: string = extractAndFormatShowDate(
    airtimeShow.start_timestamp
  );

  const currentDayOfWeek = new Date().getDay();
  const showStartHour = new Date(broadcastTime).getHours();
  const currentHourOfDay = new Date().getHours();

  const isShowHour = currentHourOfDay === showStartHour;

  const onAir =
    listPosition < 1 && isShowHour
      ? "flex flex-row h-[212px] w-full bg-black text-white"
      : "flex flex-row h-[212px] w-full";

  return (
    <>
      {firstLine && <hr className="w-full border-black" />}
      <div className={onAir}>
        <div className="flex flex-col mt-4  items-start w-fit pl-8 ">
          <Image
            src={airtimeShow.description}
            alt={""}
            width={160}
            height={150}
            className="object-cover h-[137px] max-w-[137px]"
          />
        </div>
        <ul className="flex gap-[2.9rem] flex-col pl-6 mt-[16px] sm:pl-[101px]">
          <li className=" text-sm sm:text-[32px] flex max-w-[230px]  flex-col">
            {airtimeShow.name}
          </li>
          <div className="">
            <BroadcastTime
              broadcastTime={broadcastTime}
              listPosition={listPosition}
              currentDayOfWeek={currentDayOfWeek}
            />
          </div>
          <li className="text-[22px] h-[28px] ">{airtimeShow.url}</li>
        </ul>
      </div>
    </>
  );
};

export default ScheduledBsideMobile;
