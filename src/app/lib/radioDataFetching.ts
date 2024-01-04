import axios from "axios";
import { LatestShowsData } from "../types";

const latestShowsData = "https://api.dublab.es/api";

export const getLatestShowsData = async (page: number) => {
  const { data: latestShows } = await axios.get<LatestShowsData>(
    `${latestShowsData}/shows/?page=${page}`
  );
  return latestShows;
};
