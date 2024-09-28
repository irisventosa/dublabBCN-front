/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import extractAndFormatShowDate from "@/app/lib/extractAndFormatShowDate";
import useDublabApi from "@/app/lib/hooks/useDublabApi";
import { AirtimeShow, ApiProfile } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import he from "he";
import BroadcastTime from "../BroadcastTime";
import Spinner from "../../ui/Spinner";
import formatAirtimeShowName from "@/app/lib/formatAirtimeShowName";

interface ScheduledShowProps {
  airtimeShow: AirtimeShow;
  listPosition: number;
}

const ScheduledShowMobile = ({
  airtimeShow,
  listPosition,
}: ScheduledShowProps) => {
  const { getProfileData, getArchivedProfileData } = useDublabApi();

  const formattedShowName = formatAirtimeShowName(airtimeShow.name);

  const fetchProfileData = async (showName: string) => {
    let profile = await getProfileData(showName);

    if (profile === null || profile === undefined) {
      profile = await getArchivedProfileData(showName);
    }
    return profile;
  };

  // Using SWR with custom fetcher
  const { data: profileData, error } = useSWR<ApiProfile>(
    formattedShowName,
    fetchProfileData,
  );
  const isListPositionLessThanOne = listPosition < 1;

  const dayOfAppCalendar = new Date(airtimeShow.start_timestamp).getDay();
  const broadcastTime: string = extractAndFormatShowDate(
    airtimeShow.start_timestamp,
  );

  const showStartHour = parseInt(broadcastTime);
  const currentHourOfDay = new Date().getHours();
  const currentDayOfWeek = new Date().getDay();

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

  if (!profileData && !error) {
    return <Spinner />;
  }

  if (error || !profileData) {
    return (
      <div className="text-center flex p-8">
        <p className="text-black">Informació horària no disponible.</p>
      </div>
    );
  }

  const defaultImage = profileData.picture
    ? profileData.picture
    : "/assets/Logo_dublabBCN2024.png";

  const showFontSize =
    airtimeShow.name && airtimeShow.name.length >= 20 ? "[12px]" : "sm";

  return (
    <>
      {firstSeparatorLine && <hr className="w-full border-black" />}
      <div className={onAirStyles}>
        <div className="flex flex-col pt-[15px] items-start w-fit pl-8 ">
          <Image
            src={defaultImage}
            alt={""}
            width={160}
            height={150}
            className="object-cover h-[120px] max-w-[137px]"
          />
          <Link
            className="underline underline-offset-2 text-[8px] mt-14 "
            href={`/shows/${formattedShowName}`}
          >
            View show
          </Link>
        </div>
        <ul className="flex gap-[3.8rem] flex-col pl-4 mt-[12px] sm:pl-[101px]">
          <li className={`text-${showFontSize} sm:text-[32px] flex  flex-col`}>
            {he.decode(airtimeShow.name)}
            <span className=" text-[11px] sm:text-[22px] h-[28px]  ">
              {profileData.host}
            </span>
          </li>
          <BroadcastTime broadcastTime={broadcastTime} />
          <li className="">
            <ul className="flex flex-row gap-[3px] mt-[-13px] text-[8px]">
              {profileData.tags.map((tag, index, array) => (
                <>
                  <li key={tag}>{tag}</li>
                  {index !== array.length - 1 && <li>//</li>}
                </>
              ))}
            </ul>
          </li>
        </ul>
        <ul className="flex flex-col gap-[117px] items-end absolute right-0 p-[30px] "></ul>
      </div>
    </>
  );
};

export default ScheduledShowMobile;
