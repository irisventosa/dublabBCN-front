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
  const firstLine = listPosition < 1;
  const broadcastTime: string = extractAndFormatShowDate(
    airtimeShow.start_timestamp
  );
  const currentDayOfWeek = new Date().getDay();

  const onAir =
    listPosition < 1
      ? "flex flex-row h-[212px] w-full bg-black text-white"
      : "flex flex-row h-[212px] w-full";

  return (
    <>
      {firstLine && <hr className="w-full border-black" />}
      <div className={onAir}>
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
          <BroadcastTime
            broadcastTime={broadcastTime}
            listPosition={listPosition}
            currentDayOfWeek={currentDayOfWeek}
          />
        </ul>
      </div>
    </>
  );
};

export default ScheduledBsideDesktop;
