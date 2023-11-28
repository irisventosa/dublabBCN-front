import React from "react";
import LatestShowsVariableHeight from "../components/LatestShows/LatestShowsVariableHeight";
import { getLatestShowsData } from "../lib/radioDataFetching";

const Latest = async () => {
  const { results } = await getLatestShowsData();
  return (
    <main className="flex flex-col">
      <LatestShowsVariableHeight latestShows={results} />
    </main>
  );
};

export default Latest;
