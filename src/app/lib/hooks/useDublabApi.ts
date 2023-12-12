import { ApiProfile, ApiProfilesList } from "@/app/types";
import axios from "axios";

const profileDataUrl = "https://api.dublab.es/api/profiles/";
const profileListUrl = "https://api.dublab.es/api/profiles/?page=";

const useDublabApi = () => {
  const getProfiles = async (page: string | number) => {
    const { data: profiles } = await axios.get<ApiProfilesList>(
      `${profileListUrl}${page}`
    );
    return profiles;
  };

  const getProfileData = async (showName: string) => {
    const trimmedName = showName.toLowerCase().replace(/\s+$/, "");
    const formatedShowName = trimmedName.replace(/\s+/g, "-");

    const { data: profile } = await axios.get<ApiProfile>(
      `${profileDataUrl}${formatedShowName}`
    );

    return profile;
  };

  return { getProfileData, getProfiles };
};

export default useDublabApi;
