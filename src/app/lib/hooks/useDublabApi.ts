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
const archivedProfileData = "https://api.dublab.es/api/archived/";
const profileListUrl = "https://api.dublab.es/api/profiles/?page=";
const bsidesListUrl = "https://api.dublab.es/api/b-sides/?page=";
const latestShowsData = "https://api.dublab.es/api/shows/?page=";
const showData = "https://api.dublab.es/api/shows/";
const archivedProfilesList = "https://api.dublab.es/api/archived/?page=";

const useDublabApi = () => {
  const getProfiles = async (page: string | number) => {
    const { data: profiles } = await axios.get<ApiProfilesList>(
      `${profileListUrl}${page}`
    );
    return profiles;
  };

  const getArchivedProfiles = async (page: string | number) => {
    const { data: archivedProfiles } = await axios.get<ApiProfilesList>(
      `${archivedProfilesList}${page}`
    );
    return archivedProfiles;
  };

  const getProfileData = async (showName: string) => {
    try {
      const trimmedName = showName.toLowerCase().replace(/\s+$/, "");
      const formatedShowName = trimmedName.replace(/\s+/g, "-");

      let finalShowName = formatedShowName;

      if (showName === "br") {
        finalShowName = "please-come-to-brasil";
      }

      if (showName === "When...Plants...Sing") {
        finalShowName = "whenplantssing";
      }
      if (showName === "@cero.en.conducta") {
        finalShowName = "cero-en-conducta";
      }
      if (showName === "MacGuffin 2.0") {
        finalShowName = "macguffin-20";
      }

      const { data: profile } = await axios.get<ApiProfile>(
        `${profileDataUrl}${finalShowName}`
      );

      return profile;
    } catch (error: unknown) {
      const message = "profile is not currently online";
      throw new Error(message);
    }
  };

  const getArchivedProfileData = async (showName: string) => {
    try {
      const trimmedName = showName.toLowerCase().replace(/\s+$/, "");
      const formatedShowName = trimmedName.replace(/\s+/g, "-");

      const { data: profile } = await axios.get<ApiProfile>(
        `${archivedProfileData}${formatedShowName}`
      );

      return profile;
    } catch (error: unknown) {
      const message = "profile is not currently online";
      throw new Error(message);
    }
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
    getArchivedProfileData,
    getArchivedProfiles,
    getSingleShowData,
    getLatestsShowsData,
    getProfileData,
    getProfiles,
    getBsides,
    getBsideData,
  };
};

export default useDublabApi;
