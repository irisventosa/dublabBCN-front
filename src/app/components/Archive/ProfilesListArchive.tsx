import { ApiProfile, Bside } from "../../types";
import ProfileCard from "../Profiles/ProfileCard";

interface ProfilesListProps {
  profilesOrBsides: ApiProfile[] | Bside[];
}

const ProfilesListArchive = ({ profilesOrBsides }: ProfilesListProps) => {
  return (
    <div className="px-[31px] mt-8 max-w-[100vw] ">
      <ul className="grid sm:grid-cols-3 lg:grid-cols-4 gap-x-14 gap-y-14 sm:place-items-center  ">
        {profilesOrBsides.map((profile) => (
          <li className="" key={profile.slug}>
            <ProfileCard profile={profile} height={"200px"} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfilesListArchive;
