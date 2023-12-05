import { ApiProfile, ApiProfilesList } from "@/app/types";
import axios from "axios";

const profileData = "https://api.dublab.es/api/profiles/";

const useDublabApi = () => {
  const getProfiles = async () => {
    const { data: profiles } = await axios.get<ApiProfilesList>(profileData);
    return profiles;
  };

  const getProfileData = async (showName: string) => {
    const formatedShowName = showName.toLowerCase().replace(/ /g, "-");
    const { data: profile } = await axios.get<ApiProfile>(
      `${profileData}${formatedShowName}`
    );
    return profile;
  };

  return { getProfileData, getProfiles };
};

export default useDublabApi;
