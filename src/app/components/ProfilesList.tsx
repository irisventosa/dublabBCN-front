import { ApiProfilesList } from "../types";
import ProfileCard from "./ProfileCard";

interface ProfilesListProps {
  profiles: ApiProfilesList;
}

const ProfilesList = ({ profiles }: ProfilesListProps) => {
  return (
    <ul>
      {profiles.results.map((profile) => (
        <li key={profile.id}>
          <ProfileCard profile={profile} height={""} />
        </li>
      ))}
    </ul>
  );
};

export default ProfilesList;
