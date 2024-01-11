"use client";
import ProfileLinks from "@/app/components/Profiles/ProfileLinks";
import Tracklist from "@/app/components/Tracklist";
import useDublabApi from "@/app/lib/hooks/useDublabApi";
import { ApiProfile, RadioShow } from "@/app/types";
import Image from "next/image";
import useSWR from "swr";

interface ShowByDateProps {
  params: {
    date: string;
    slug: string;
  };
}

const ShowByDate = ({ params }: ShowByDateProps) => {
  const { getProfileData, getSingleShowData } = useDublabApi();

  const endpoint = `${params.slug}-${params.date} `;

  const { data: profileData } = useSWR<ApiProfile>(params.slug, getProfileData);
  const { data: showData } = useSWR<RadioShow>(endpoint, getSingleShowData);

  let profileShowName = params.slug.replace(/-/g, " ");

  if (profileShowName === "macguffin 20") {
    profileShowName = "macguffin 2.0";
  }

  if (!profileData) return <div>Loading...</div>;

  if (!showData) return "tracklsit not provided";

  return (
    <main className="mt-[255px] gap-[50px] flex justify-between">
      <Image
        src={profileData.picture}
        alt={""}
        width={660}
        height={327}
        className="h-[727px] object-cover"
      />
      <section className="max-h-[700px] min-w-[720px] overflow-scroll scrollbar-hide sm:pr-[10rem]">
        <div className="flex justify-between items-end">
          <ul className="flex">
            <li>Listen</li>
            <span className="loader"></span>
          </ul>
          <ul className="flex gap-[10px] opacity-40">
            {profileData.tags.map((tag, index) => (
              <li
                key={index}
                className=" text-[11px] border rounded-md pt-[5px] px-2 pb-[3px]"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <h2 className="text-5xl h-[58px] mt-[56px]">{profileShowName}</h2>
        <ul className="flex gap-[194px] text-[32px] mt-[50px] ">
          <li>With</li>
          <li>{profileData.host} </li>
        </ul>
        <section className="flex gap-[140px]">
          <ProfileLinks links={profileData.links}></ProfileLinks>
          <p className="text-sm w-[445px] mt-[50px]">
            {profileData.description}
          </p>
        </section>
        <section className="flex-col items-end">
          <Tracklist tracklist={showData.tracklist!}></Tracklist>
        </section>
      </section>
    </main>
  );
};

export default ShowByDate;
