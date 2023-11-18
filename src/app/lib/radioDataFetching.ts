import axios from "axios";
import { ApiProfileShow, LatestShowsData, LiveRadioData } from "../types";

const streamingData = "https://dublabbcn.airtime.pro/api/live-info";
const latestShowsData = "http://127.0.0.1:8000/api/shows/";
const profileData = "https://api.dublab.es/api/profiles/";

export const getLiveRadioData = async () => {
  const { data: onAirRadio } = await axios.get<LiveRadioData>(streamingData);

  return onAirRadio;
};

export const getLatestShowsData = async () => {
  const { data: latestShows } = await axios.get<LatestShowsData>(
    latestShowsData
  );

  return latestShows;
};

export const getProfileData = async () => {
  const { data: profile } = await axios.get<ApiProfileShow>(profileData);

  return profile;
};
