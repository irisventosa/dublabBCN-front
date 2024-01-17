"use client";
import extractAndFormatShowDate from "@/app/lib/extractAndFormatShowDate";
import useDublabApi from "@/app/lib/hooks/useDublabApi";
import { AirtimeShow, ApiProfile } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import he from "he";
import BroadcastTime from "../BroadcastTime";

interface ScheduledShowProps {
  airtimeShow: AirtimeShow;
  listPosition: number;
}

const ScheduledShowMobile = ({
  airtimeShow,
  listPosition,
}: ScheduledShowProps) => {
  const { getProfileData } = useDublabApi();

  const formatString = (airtimeShowName: string) => {
    if (airtimeShowName === "When...Plants...Sing") {
      const showIsPlants = "whenplantssing";
      return showIsPlants;
    }

    if (airtimeShowName === "house-of-spunk-") {
      const showIsSpunk = "house-of-spunk";
      return showIsSpunk;
    }

    if (airtimeShowName === "SoWhat") {
      const showIsJazz = "so-what";
      return showIsJazz;
    }

    const decodedName = he.decode(airtimeShowName);

    const decodeAndFixShowName = decodedName
      .toLowerCase()
      .normalize("NFD") // Decompose characters (remove diacritical marks)
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9\s-]/g, "") // Remove non-alphanumeric characters except spaces and hyphens
      .replace(/\./g, "") // Remove periods
      .normalize(); // Compose characters back

    return decodeAndFixShowName;
  };

  const formattedShowName = formatString(airtimeShow.name);

  const { data: profileData } = useSWR<ApiProfile>(
    formattedShowName,
    getProfileData
  );

  const isListPositionLessThanOne = listPosition < 1;

  const dayOfAppCalendar = new Date(airtimeShow.start_timestamp).getDay();
  const broadcastTime: string = extractAndFormatShowDate(
    airtimeShow.start_timestamp
  );
  const currentDayOfWeek = new Date().getDay();
  const showStartHour = new Date(broadcastTime).getHours();
  const currentHourOfDay = new Date().getHours();

  const isShowHour = currentHourOfDay === showStartHour;

  const {
    onAirStyles = isListPositionLessThanOne &&
    currentDayOfWeek === dayOfAppCalendar &&
    isShowHour
      ? "flex flex-row h-[212px] w-full bg-black text-white"
      : "flex flex-row h-[212px] w-full",
    firstSeparatorLine = isListPositionLessThanOne,
  } = {};

  if (!profileData) return <div>Informació del programa no disponible.</div>;

  return (
    <>
      {firstSeparatorLine && <hr className="w-full border-black" />}
      <div className={onAirStyles}>
        <div className="flex flex-col justify-center items-start w-fit pl-8 ">
          <Image
            src={profileData.picture}
            alt={""}
            width={160}
            height={150}
            className="object-cover h-[137px] max-w-[137px]"
          />
          <Link
            className="underline underline-offset-2 text-[8px] mt-6 "
            href={`/shows/${formattedShowName}`}
          >
            View show
          </Link>
        </div>
        <ul className="flex gap-[2.9rem] flex-col pl-4 mt-[16px] sm:pl-[101px]">
          <li className=" text-sm sm:text-[32px] flex  flex-col">
            {he.decode(airtimeShow.name)}
            <span className=" text-[11px] sm:text-[22px] h-[28px]  ">
              {profileData.host}
            </span>
          </li>
          <BroadcastTime
            broadcastTime={broadcastTime}
            listPosition={listPosition}
            currentDayOfWeek={currentDayOfWeek}
          />
          <li className="">
            <ul className="flex flex-row gap-[10px]  text-[8px]">
              {profileData.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
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
