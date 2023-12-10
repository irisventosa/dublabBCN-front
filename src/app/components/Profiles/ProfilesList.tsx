import { ApiProfile } from "../../types";
import ProfileCard from "./ProfileCard";

interface ProfilesListProps {
  firstPageOfProfiles: ApiProfile[];
}

const ProfilesList = ({ firstPageOfProfiles }: ProfilesListProps) => {
  return (
    <ul className="grid grid-cols-4 px-[31px] gap-x-3 gap-y-14">
      {firstPageOfProfiles.map((profile) => (
        <li key={profile.id}>
          <ProfileCard profile={profile} height={""} />
        </li>
      ))}
    </ul>
  );
};

export default ProfilesList;
