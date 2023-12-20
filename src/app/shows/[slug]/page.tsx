"use client";
import ProfileLinks from "@/app/components/Profiles/ProfileLinks";
import RelatedShows from "@/app/components/Profiles/ProfileRelatedShows";
import useDublabApi from "@/app/lib/hooks/useDublabApi";
import { ApiProfile } from "@/app/types";
import Image from "next/image";
import useSWR from "swr";

interface ProfileDetailsProps {
  params: {
    slug: string;
  };
}

const ProfileDetails = ({ params }: ProfileDetailsProps) => {
  const { getProfileData } = useDublabApi();

  const { data: profileData } = useSWR<ApiProfile>(params.slug, getProfileData);

  let ProfileShowName = params.slug.replace(/-/g, " ");

  if (ProfileShowName === "macguffin 20") {
    ProfileShowName = "macguffin 2.0";
  }

  if (!profileData) return <div>Loading...</div>;

  return (
    <main className="mt-[255px] w-[720px] gap-[50px] flex ">
      <Image
        src={profileData.picture}
        alt={""}
        width={660}
        height={327}
        className="h-[727px]"
      ></Image>
      <section className="max-h-[700px] min-w-[720px] overflow-scroll scrollbar-hide">
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
        <h2 className="text-5xl h-[58px] mt-[56px]">{ProfileShowName}</h2>
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
          <div className="text-2xl flex justify-between mt-[58px] mb-[17px]">
            <h3 className="h-[29px]">Shows Relacionats</h3>
            <span>2023</span>
          </div>
          <hr className="border-black w-[719px] " />
          <RelatedShows shows={profileData.shows} />
        </section>
      </section>
    </main>
  );
};

export default ProfileDetails;
