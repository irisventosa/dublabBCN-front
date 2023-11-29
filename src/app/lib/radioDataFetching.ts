import axios from "axios";
import { LatestShowsData } from "../types";

const latestShowsData = process.env.DB_HOST!;

export const getLatestShowsData = async () => {
  const { data: latestShows } = await axios.get<LatestShowsData>(
    `${latestShowsData}/shows`
  );
  return latestShows;
};
