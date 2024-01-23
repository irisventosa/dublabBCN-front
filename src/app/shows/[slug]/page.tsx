"use client";
import ProfileLinks from "@/app/components/Profiles/ProfileLinks";
import RelatedShows from "@/app/components/Profiles/ProfileRelatedShows";
import Spinner from "@/app/components/ui/Spinner";
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

  let profileShowName = params.slug.replace(/-/g, " ");

  if (profileShowName === "macguffin 20") {
    profileShowName = "macguffin 2.0";
  }

  if (!profileData) return <Spinner />;

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
        <div className="flex justify-between items-end">
          <ul className="flex gap-[10px] pr-4 opacity-100 sm:opacity-40">
            {profileData.tags.map((tag, index) => (
              <li
                key={index}
                className={`text-[11px] mr-[${
                  index * 5
                }px] border rounded-md pt-[5px]  px-2 pb-[3px]`}
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
            <li className="max-w-[304px] sm:max-w-[400px]">
              {profileData.host}
            </li>
          </ul>
        </div>
        <section className="flex flex-col-reverse gap-[35px] sm:gap-[140px] max-w-fit">
          <div className="w-fit sm:max-w-none mt-8 flex flex-row ">
            <ProfileLinks links={profileData.links}></ProfileLinks>
            <p className="text-sm sm:w-fit sm:pr-0 pr-4  ">
              {profileData.description}
            </p>
          </div>
        </section>
        <section className="flex-col items-end">
          <div className="text-2xl flex items-end justify-between mt-[58px] gap-8 mb-[17px]">
            <h3 className=" h-fit ">Shows Relacionats</h3>
            <span>2024</span>
          </div>
          <hr className="border-black  w-full " />
          <RelatedShows shows={profileData.shows} />
        </section>
      </section>
    </main>
  );
};

export default ProfileDetails;
