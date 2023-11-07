import React from "react";
import ShowCard from "./ShowCard";

const LatestShows = (): React.ReactElement => {
  return (
    <section className="py-[65px] px-[31px]">
      <ul className="grid grid-cols-4 gap-x-3 gap-y-14">
        <li className="w-[352px] ">
          <ShowCard />
        </li>
        <ShowCard />
        <li>
          <ShowCard />
        </li>
        <li>
          <ShowCard />
        </li>
        <ShowCard />
        <ShowCard />
        <ShowCard />
        <ShowCard />
      </ul>
    </section>
  );
};

export default LatestShows;
