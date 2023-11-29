"use client";
import { RadioApiShow } from "@/app/types";
import { useState } from "react";
import ShowCard from "./ShowCard";

interface LatestShowsVariableHeightProps {
  latestShows: RadioApiShow[];
}

const LatestShowsVariableHeight = ({
  latestShows,
}: LatestShowsVariableHeightProps) => {
  const [iFrameShow, setIFrameShow] = useState("");

  const heights = ["small", "medium", "large"];

  const getRandomHeight = () => {
    const randomIndex = Math.floor(Math.random() * heights.length);
    return heights[randomIndex];
  };

  const handleCardShow = (showFromCard: string) => {
    setIFrameShow(showFromCard);
  };

  return (
    <section className="py-[65px] px-[31px]">
      <ul className="grid grid-cols-4 gap-x-3 gap-y-14 pt-[206px] ">
        {latestShows.map((show) => (
          <li key={show.slug}>
            <ShowCard
              show={show}
              height={getRandomHeight()}
              onClickPlayback={handleCardShow}
            />
          </li>
        ))}
      </ul>
      {iFrameShow && (
        <iframe
          title="Programa de radio seleccionat"
          className="w-[800px] fixed bottom-0 left-0"
          height="60"
          allow="autoplay"
          src={`https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&autoplay=1&feed=/${iFrameShow}`}
        ></iframe>
      )}
    </section>
  );
};

export default LatestShowsVariableHeight;
