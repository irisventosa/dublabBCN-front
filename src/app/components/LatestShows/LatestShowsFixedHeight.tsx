import React from "react";
import fakeShows from "../../../../fakeData";
import ShowCard from "./ShowCard";
import { getLatestShowsData } from "@/app/lib/radioDataFetching";

const LatestShowsFixedHeight = async () => {
  const { results } = await getLatestShowsData();

  const latestShows = results.slice(0, 7);

  return (
    <section className="py-[65px]">
      <ul className="grid grid-cols-4 px-[31px] gap-x-3 gap-y-14">
        {latestShows.map((show) => (
          <li
            key={show.slug}
            className=" className={`w-[353px] h-[385px] relative overflow-hidden leading-[120%]`}
    >"
          >
            <ShowCard show={show} height={"385"} />
          </li>
        ))}
      </ul>
      <iframe
        className="w-screen"
        height="60"
        allow="autoplay"
        src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&amp;mini=1&amp;light=1&amp;autoplay=1&amp;feed=/dublabes/anxiety-suitcase-140423/"
      ></iframe>
    </section>
  );
};

export default LatestShowsFixedHeight;
