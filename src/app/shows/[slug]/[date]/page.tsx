"use client";
import Button from "@/app/components/Button";
import ProfileLinks from "@/app/components/Profiles/ProfileLinks";
import Tracklist from "@/app/components/Tracklist";
import extractUrlForEmbedPlayer from "@/app/lib/extractUrlForEmbedPlayer";
import useDublabApi from "@/app/lib/hooks/useDublabApi";
import { ApiProfile, RadioShow } from "@/app/types";
import Image from "next/image";
import { useState } from "react";
import useSWR from "swr";

interface ShowByDateProps {
  params: {
    date: string;
    slug: string;
  };
}

const ShowByDate = ({ params }: ShowByDateProps) => {
  const { getProfileData, getSingleShowData } = useDublabApi();
  const [iFrameShow, setIFrameShow] = useState("");

  const showDataEndpoint = `${params.slug}-${params.date} `;

  const { data: profileData } = useSWR<ApiProfile>(params.slug, getProfileData);
  const { data: showData } = useSWR<RadioShow>(
    showDataEndpoint,
    getSingleShowData
  );

  let profileShowName = params.slug.replace(/-/g, " ");

  if (profileShowName === "macguffin 20") {
    profileShowName = "macguffin 2.0";
  }

  if (profileShowName === "cero en conducta") {
    profileShowName = "@cero.en.conducta";
  }

  const listenShow = (showLink: string) => {
    setIFrameShow(showLink);
  };

  if (!profileData) return <div>Loading...</div>;
  if (!showData) return "tracklsit not provided";

  const showUrl = extractUrlForEmbedPlayer(showData.mixcloud_url);

  return (
    <main className="mt-[255px] gap-[50px] flex sm:flex-row flex-col justify-between">
      <Image
        src={profileData.picture}
        alt={""}
        width={660}
        height={327}
        className="sm:h-[727px] h-[358px] max-w-[660px] w-auto object-cover sm:p-0 p-4 "
      />
      <section className="max-h-[700px] pl-4 sm:w-[100vw] overflow-scroll scrollbar-hide sm:pr-[10rem]">
        <div className="flex sm:flex-row flex-col  justify-between items-start sm:items-end">
          <Button
            className="uppercase"
            actionOnClick={() => listenShow(showUrl)}
          >
            Listen
          </Button>
          <ul className="flex gap-[10px] pr-4 opacity-100 sm:opacity-40">
            {profileData.tags.map((tag, index) => (
              <li
                key={index}
                className=" text-black text-[11px] sm:border rounded-md pt-[5px] sm:px-2 pb-[3px]"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-fit">
          <h2 className="text-5xl h-[58px] mt-[56px]">{profileShowName}</h2>
          <ul className="flex gap-9 sm:gap-[194px] text-[32px]  mt-[20px] sm:mt-[50px]">
            <li>With</li>
            <li className="max-w-[304px] sm:max-w-none">{profileData.host} </li>
          </ul>
        </div>
        <section className="flex flex-col-reverse gap-[35px] sm:gap-[140px] max-w-fit">
          <ProfileLinks links={profileData.links}></ProfileLinks>
          <div className="w-fit sm:max-w-none mt-8 ">
            <p className="text-sm sm:w-[445px] sm:pr-0 pr-4 ">
              {profileData.description}
            </p>
          </div>
        </section>
        <section className="flex-col items-end ">
          <Tracklist tracklist={showData.tracklist!}></Tracklist>
        </section>
      </section>
      {iFrameShow && (
        <iframe
          title="Programa de radio seleccionat"
          className=" w-screen fixed bottom-0 left-0"
          height="60"
          allow="autoplay"
          src={`https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&autoplay=1&feed=/${iFrameShow}`}
        ></iframe>
      )}
    </main>
  );
};

export default ShowByDate;
