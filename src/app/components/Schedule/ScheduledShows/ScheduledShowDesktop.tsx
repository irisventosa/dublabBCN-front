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

interface ScheduledShowProps {
  airtimeShow: AirtimeShow;
  listPosition: number;
}

const ScheduledShowDesktop = ({
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

  const { data: profileData, error } = useSWR<ApiProfile>(
    formattedShowName,
    getProfileData
  );

  const isListPositionLessThanOne = listPosition < 1;

  const dayOfAppCalendar = new Date(airtimeShow.start_timestamp).getDay();
  const broadcastTime: string = extractAndFormatShowDate(
    airtimeShow.start_timestamp
  );

  const currentDayOfWeek = new Date().getDay();
  const showStartHour = parseInt(broadcastTime);
  const currentHourOfDay = new Date().getHours();

  const isShowHour = currentHourOfDay === showStartHour;

  const { onAirStyles, firstSeparatorLine, borderColor } =
    isListPositionLessThanOne &&
    currentDayOfWeek === dayOfAppCalendar &&
    isShowHour
      ? {
          onAirStyles: "flex flex-row h-[212px] w-full bg-black text-white",
          firstSeparatorLine: true,
          borderColor: "border border-white rounded-md pt-[5px] px-2 pb-[1px]",
        }
      : {
          onAirStyles: "flex flex-row h-[212px] w-full",
          firstSeparatorLine: isListPositionLessThanOne,
          borderColor: "border border-black rounded-md pt-[5px] px-2 pb-[1px]",
        };

  if (!profileData) return <Spinner></Spinner>;
  if (error) return <div>Informació del programa no disponible.</div>;

  return (
    <>
      {firstSeparatorLine && <hr className="w-full border-black" />}
      <div className={onAirStyles}>
        <Image
          src={profileData.picture}
          alt={""}
          width={263}
          height={150}
          className="py-[31px] pl-8 object-cover"
        />
        <ul className="flex flex-col pl-[101px]">
          <li className="text-[32px] h-[47px] mt-[21px]">
            {he.decode(airtimeShow.name)}
          </li>
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
        <ul className="flex flex-col gap-[108px] items-end absolute right-0 p-[30px] ">
          <BroadcastTime broadcastTime={broadcastTime} />
          <li>
            <Link
              className="underline underline-offset-2"
              href={`/shows/${formattedShowName}`}
            >
              View show
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ScheduledShowDesktop;
