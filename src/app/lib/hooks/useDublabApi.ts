import {
  ApiBsidesList,
  ApiProfile,
  ApiProfilesList,
  Bside,
  LatestShowsData,
  RadioShow,
} from "@/app/types";
import axios from "axios";

const profileDataUrl = "https://api.dublab.es/api/profiles/";
const bsideDataUrl = "https://api.dublab.es/api/b-sides/";
const profileListUrl = "https://api.dublab.es/api/profiles/?page=";
const bsidesListUrl = "https://api.dublab.es/api/b-sides/?page=";
const latestShowsData = "https://api.dublab.es/api/shows/?page=";
const showData = "https://api.dublab.es/api/shows/";

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

  const getSingleShowData = async (slug: string) => {
    const { data: show } = await axios.get<RadioShow>(`${showData}${slug}`);

    return show;
  };

  const getLatestsShowsData = async (page: number) => {
    const { data: latestShows } = await axios.get<LatestShowsData>(
      `${latestShowsData}${page}`
    );
    return latestShows;
  };

  const getBsides = async (page: string | number) => {
    const { data: bSides } = await axios.get<ApiBsidesList>(
      `${bsidesListUrl}${page}`
    );
    return bSides;
  };

  const getBsideData = async (bSideSlug: string) => {
    const { data: bSide } = await axios.get<Bside>(
      `${bsideDataUrl}${bSideSlug}`
    );
    return bSide;
  };

  return {
    getSingleShowData,
    getLatestsShowsData,
    getProfileData,
    getProfiles,
    getBsides,
    getBsideData,
  };
};

export default useDublabApi;
