import { ApiProfile, Bside } from "../../types";
import ProfileCard from "./ProfileCard";

interface ProfilesListProps {
  firstPageOfProfiles: ApiProfile[] | Bside[];
}

const ProfilesList = ({ firstPageOfProfiles }: ProfilesListProps) => {
  return (
    <ul className="grid grid-cols-4 px-[31px] gap-x-3 gap-y-14">
      {firstPageOfProfiles.map((profile) => (
        <li key={profile.slug}>
          <ProfileCard profile={profile} height={""} />
        </li>
      ))}
    </ul>
  );
};

export default ProfilesList;
