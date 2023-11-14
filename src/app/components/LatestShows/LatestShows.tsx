import React from "react";
import fakeShows from "../../../../fakeData";
import ShowCard from "./ShowCard";

const LatestShows = (): React.ReactElement => {
  return (
    <section className="py-[65px] px-[31px]">
      <ul className="grid grid-cols-4 gap-x-3 gap-y-14">
        {fakeShows.map((show) => (
          <li key={show.slug}>
            <ShowCard show={show} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LatestShows;
