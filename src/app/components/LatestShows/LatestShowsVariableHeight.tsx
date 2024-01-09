"use client";
import { Bside, RadioApiShow } from "@/app/types";
import { useState } from "react";
import BsideCard from "./BsideCard";
import ShowCard from "./ShowCard";

interface LatestShowsVariableHeightProps {
  latestPodcasts: RadioApiShow[] | Bside[];
  paddingTop: string;
}

const LatestShowsVariableHeight = ({
  latestPodcasts,
  paddingTop,
}: LatestShowsVariableHeightProps) => {
  const [iFrameShow, setIFrameShow] = useState("");

  const getRandomHeight = () => {
    const heights = [150, 200, 300];
    const randomIndex = Math.floor(Math.random() * heights.length);
    const selectedHeight = heights[randomIndex];
    return `${selectedHeight}px`;
  };

  const handleCardShow = (showFromCard: string) => {
    setIFrameShow(showFromCard);
  };

  return (
    <section className="py-[65px] px-[31px]">
      <ul
        className={`grid grid-cols-4  gap-x-3 gap-y-14 pt-[${paddingTop}] sm:place-items-center `}
      >
        {latestPodcasts.map((show) => (
          <li
            key={show.slug}
            className="max-w-[353px] relative leading-[120%]"
            style={{ maxHeight: "100%" }}
          >
            {Object.prototype.hasOwnProperty.call(show, "host") ? (
              <ShowCard
                show={show}
                height={getRandomHeight()}
                onClickPlayback={handleCardShow}
              />
            ) : (
              <BsideCard
                bside={show as Bside}
                height={getRandomHeight()}
                onClickPlayback={handleCardShow}
              />
            )}
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
