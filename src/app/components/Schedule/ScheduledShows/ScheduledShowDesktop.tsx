"use client";
import extractAndFormatShowDate from "@/app/lib/extractAndFormatShowDate";
import formatAirtimeShowName from "@/app/lib/formatAirtimeShowName";
import useDublabApi from "@/app/lib/hooks/useDublabApi";
import { AirtimeShow, ApiProfile } from "@/app/types";
import he from "he";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import Spinner from "../../ui/Spinner";
import BroadcastTime from "../BroadcastTime";
import calculateShowStyles from "@/app/lib/calculateShowStyles";

interface ScheduledShowProps {
  airtimeShow: AirtimeShow;
  listPosition: number;
}

const ScheduledShowDesktop = ({
  airtimeShow,
  listPosition,
}: ScheduledShowProps) => {
  const { getProfileData } = useDublabApi();

  const formattedShowName = formatAirtimeShowName(airtimeShow.name);
  const { data: profileData, error } = useSWR<ApiProfile>(
    formattedShowName,
    getProfileData
  );

  const isListPositionLessThanOne = listPosition < 1;

  const broadcastTime: string = extractAndFormatShowDate(
    airtimeShow.start_timestamp
  );
  const { onAirStyles, firstSeparatorLine, borderColor } = calculateShowStyles(
    airtimeShow.start_timestamp,
    isListPositionLessThanOne
  );

  if (!profileData && !error) {
    return <Spinner />;
  }

  if (error || !profileData) {
    return (
      <div className="text-center flex p-8">
        <p className="text-black">Informació horària disponible.</p>
      </div>
    );
  }

  const defaultImage = profileData.picture
    ? profileData.picture
    : "/assets/Logo_dublabBCN2024.png";

  return (
    <>
      {firstSeparatorLine && <hr className="w-full border-black" />}
      <div className={onAirStyles}>
        <Image
          src={defaultImage}
          alt={""}
          width={263}
          height={150}
          className="py-[31px] pl-8 object-cover"
        />
        <ul className="flex flex-col pl-[101px]">
          <li className="text-[32px] h-[47px] mt-[21px]">
            {he.decode(airtimeShow.name)}
          </li>
          <li className="text-[22px] h-[28px]">{profileData.host}</li>
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
