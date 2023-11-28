import { ApiProfileShow } from "@/app/types";
import axios from "axios";
import { useCallback } from "react";

const profileData = "https://api.dublab.es/api/profiles/";

const useDublabApi = () => {
  const getProfileData = useCallback(async (showName: string) => {
    const formatedShowName = showName.toLowerCase().replace(/ /g, "-");
    const { data: profile } = await axios.get<ApiProfileShow>(
      `${profileData}${formatedShowName}`
    );
    return profile;
  }, []);

  return { getProfileData };
};

export default useDublabApi;
