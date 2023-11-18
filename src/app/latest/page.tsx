import React from "react";
import LatestShowsVariableHeight from "../components/LatestShows/LatestShowsVariableHeight";

const Latest = (): React.ReactElement => {
  return (
    <main className="flex flex-col">
      <LatestShowsVariableHeight />
    </main>
  );
};

export default Latest;
