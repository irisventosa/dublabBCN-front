"use client";
import extractAndFormatShowDate from "@/app/lib/extractAndFormatShowDate";
import { AirtimeShow } from "@/app/types";
import Image from "next/image";
import Link from "next/link";

interface ScheduledBsideShow {
  airtimeShow: AirtimeShow;
  listPosition: number;
}

const ScheduledBsideShow = ({
  airtimeShow,
  listPosition,
}: ScheduledBsideShow) => {
  const broadcastingTime = extractAndFormatShowDate(
    airtimeShow.start_timestamp
  );

  const firstLine = listPosition < 1;

  const onAir =
    listPosition < 1
      ? "flex flex-row h-[212px] w-full bg-black text-white"
      : "flex flex-row h-[212px] w-full";

  return (
    <>
      {firstLine && <hr className="w-full border-black" />}
      <div className={onAir}>
        <Image
          src={"/assets/b-sides.png"}
          alt={""}
          width={263}
          height={150}
          className="py-[31px] pl-8"
        />
        <ul className="flex flex-col pl-[101px]">
          <li className="text-[32px] h-[47px] mt-[21px]">{airtimeShow.name}</li>
          <li className="text-[22px] h-[28px] ">{airtimeShow.url}</li>
          <li className="pt-[59px]"></li>
        </ul>
        <ul className="flex flex-col gap-[117px] items-end absolute right-0 p-[30px] ">
          <li>
            {listPosition < 1 ? (
              <Image
                className="animate-pulse animate-infinite animate-duration-[2000ms] animate-ease-in-out animate-normal mb-[5px]"
                src={"/assets/Ellipse.svg"}
                alt={"Elipse"}
                width={18}
                height={18}
              />
            ) : (
              broadcastingTime
            )}
          </li>
          <li>
            <Link className="underline underline-offset-2" href={""}>
              View show
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ScheduledBsideShow;
