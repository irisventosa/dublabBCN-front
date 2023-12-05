"use client";
import extractAndFormatShowDate from "@/app/lib/extractAndFormatShowDate";
import useDublabApi from "@/app/lib/hooks/useDublabApi";
import { AirtimeShow, ApiProfile } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

interface ScheduledShowProps {
  airtimeShow: AirtimeShow;
  listPosition: number;
}

const ScheduledShow = ({ airtimeShow, listPosition }: ScheduledShowProps) => {
  const { getProfileData } = useDublabApi();

  const { data: profileData } = useSWR<ApiProfile>(
    airtimeShow.name,
    getProfileData
  );

  const isListPositionLessThanOne = listPosition < 1;

  const {
    onAirStyles = isListPositionLessThanOne
      ? "flex flex-row h-[212px] w-full bg-black text-white"
      : "flex flex-row h-[212px] w-full",
    firstSeparatorLine = isListPositionLessThanOne,
    borderColor = isListPositionLessThanOne
      ? "border border-white rounded-md pt-[5px] px-2 pb-[3px]"
      : "border border-black rounded-md pt-[5px] px-2 pb-[3px]",
  } = {};

  const broadcastTime: string = extractAndFormatShowDate(
    airtimeShow.start_timestamp
  );

  if (!profileData) return <div>Loading...</div>;

  return (
    <>
      {firstSeparatorLine && <hr className="w-full border-black" />}
      <div className={onAirStyles}>
        <Image
          src={profileData.picture}
          alt={""}
          width={263}
          height={150}
          className="py-[31px] pl-8"
        />
        <ul className="flex flex-col pl-[101px]">
          <li className="text-[32px] h-[47px] mt-[21px]">{airtimeShow.name}</li>
          <li className="text-[22px] h-[28px] ">{profileData.host}</li>
          <li className="pt-[59px]">
            <ul className="flex flex-row gap-[10px] text-[11px]">
              {profileData.tags.map((tag, index) => (
                <li key={index} className={borderColor}>
                  {tag}
                </li>
              ))}
            </ul>
          </li>
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
              broadcastTime
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

export default ScheduledShow;
