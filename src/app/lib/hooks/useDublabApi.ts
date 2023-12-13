import { ApiBsidesList, ApiProfile, ApiProfilesList } from "@/app/types";
import axios from "axios";

const profileDataUrl = "https://api.dublab.es/api/profiles/";
const profileListUrl = "https://api.dublab.es/api/profiles/?page=";
const bSidesListUrl = "https://api.dublab.es/api/b-sides/?page=";

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

  const getBsidesData = async (page: string | number) => {
    const { data: bSides } = await axios.get<ApiBsidesList>(
      `${bSidesListUrl}${page}`
    );
    return bSides;
  };

  return { getProfileData, getProfiles, getBsidesData };
};

export default useDublabApi;
