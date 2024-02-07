"use client";
import { ApiProfile, Bside } from "@/app/types";
import ProfileCardMobile from "./ProfileCardMobile";

interface ProfileListMobileProps {
  seasonProfiles: ApiProfile[] | Bside[];
}

const ProfileListMobile = ({ seasonProfiles }: ProfileListMobileProps) => {
  return (
    <section className=" py-[6px] ">
      <ul className="flex flex-col items-center sm:px-8 sm:grid lg:grid-cols-2 xl:grid-cols-4 w-auto sm:gap-y-14 px-4 gap-x-4 gap-2  sm:place-items-center">
        {seasonProfiles.map((profile) => (
          <li
            key={profile.slug}
            className="max-w-[400px] h-[332px] overflow-hidden relative leading-[120%]"
          >
            <ProfileCardMobile profile={profile} height={"332"} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProfileListMobile;
