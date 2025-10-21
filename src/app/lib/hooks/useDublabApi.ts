import {
  ApiBsidesList,
  ApiProfile,
  ApiProfilesList,
  Bside,
  LatestShowsData,
  RadioShow,
} from "@/app/types";

const profileDataUrl = "https://api.dublab.cat/api/profiles/";
const bsideDataUrl = "https://api.dublab.cat/api/b-sides/";
const archivedProfileData = "https://api.dublab.cat/api/archived/";
const profileListUrl = "https://api.dublab.cat/api/profiles/?page=";
const bsidesListUrl = "https://api.dublab.cat/api/b-sides/?page=";
const latestShowsData = "https://api.dublab.cat/api/shows/?page=";
const showData = "https://api.dublab.cat/api/shows/";
const archivedProfilesList = "https://api.dublab.cat/api/archived/?page=";

const useDublabApi = () => {
  const getProfiles = async (page: string | number): Promise<ApiProfilesList> => {
    const res = await fetch(`${profileListUrl}${page}`);
    if (!res.ok) throw new Error(`Failed to fetch profiles: ${res.statusText}`);
    return res.json();
  };

  const getArchivedProfiles = async (page: string | number): Promise<ApiProfilesList> => {
    const res = await fetch(`${archivedProfilesList}${page}`);
    if (!res.ok) throw new Error(`Failed to fetch archived profiles: ${res.statusText}`);
    return res.json();
  };

  const getProfileData = async (showName: string): Promise<ApiProfile | null> => {
    try {
      const trimmedName = showName.toLowerCase().replace(/\s+$/, "");
      let formattedShowName = trimmedName.replace(/\s+/g, "-");

      if (showName === "br") formattedShowName = "please-come-to-brasil";
      if (showName === "When...Plants...Sing") formattedShowName = "whenplantssing";
      if (showName === "@cero.en.conducta") formattedShowName = "cero-en-conducta";
      if (showName === "MacGuffin 2.0") formattedShowName = "macguffin-20";

      const res = await fetch(`${profileDataUrl}${formattedShowName}`);
      if (!res.ok) throw new Error(`Profile not found: ${res.statusText}`);

      return res.json();
    } catch (error) {
      return null;
    }
  };

  const getArchivedProfileData = async (showName: string): Promise<ApiProfile> => {
    try {
      const trimmedName = showName.toLowerCase().replace(/\s+$/, "");
      let formattedShowName = trimmedName.replace(/\s+/g, "-");

      if (formattedShowName === "MacGuffin 2.0") {
        formattedShowName = "macguffin-20";
      }

      const res = await fetch(`${archivedProfileData}${formattedShowName}`);
      if (!res.ok) throw new Error(`Archived profile not found: ${res.statusText}`);

      return res.json();
    } catch {
      throw new Error("Profile is not currently online");
    }
  };

  const getSingleShowData = async (slug: string): Promise<RadioShow> => {
    const res = await fetch(`${showData}${slug}`);
    if (!res.ok) throw new Error(`Failed to fetch show: ${res.statusText}`);
    return res.json();
  };

  const getLatestsShowsData = async (page: number): Promise<LatestShowsData> => {
    const res = await fetch(`${latestShowsData}${page}`);
    if (!res.ok) throw new Error(`Failed to fetch latest shows: ${res.statusText}`);
    return res.json();
  };

  const getBsides = async (page: string | number): Promise<ApiBsidesList> => {
    const res = await fetch(`${bsidesListUrl}${page}`);
    if (!res.ok) throw new Error(`Failed to fetch B-sides: ${res.statusText}`);
    return res.json();
  };

  const getBsideData = async (bSideSlug: string): Promise<Bside> => {
    const res = await fetch(`${bsideDataUrl}${bSideSlug}`);
    if (!res.ok) throw new Error(`Failed to fetch B-side: ${res.statusText}`);
    return res.json();
  };

  return {
    getProfiles,
    getArchivedProfiles,
    getProfileData,
    getArchivedProfileData,
    getSingleShowData,
    getLatestsShowsData,
    getBsides,
    getBsideData,
  };
};


export default useDublabApi;
