"use client";
import { useState } from "react";
import ShowCard from "./ShowCard";
import { Bside, RadioApiShow } from "@/app/types";
import BsideCard from "./BsideCard";

interface LatestShowsFixedHeightProps {
  latestShows: RadioApiShow[] | Bside[];
}

const LatestShowsFixedHeight = ({
  latestShows,
}: LatestShowsFixedHeightProps) => {
  const [iFrameShow, setIFrameShow] = useState("");

  const handleCardShow = (showFromCard: string) => {
    setIFrameShow(showFromCard);
  };

  return (
    <section className=" py-[44px] ">
      <ul className="flex flex-col items-center sm:px-8 sm:grid sm:grid-cols-4 sm:gap-y-14 px-4 gap-x-4 gap-8 ">
        {latestShows.map((show) => (
          <li
            key={show.slug}
            className="max-w-[353px] h-[385px] overflow-hidden relative leading-[120%]"
          >
            {Object.prototype.hasOwnProperty.call(show, "host") ? (
              <ShowCard
                show={show}
                height={"385"}
                onClickPlayback={handleCardShow}
              />
            ) : (
              <BsideCard
                bside={show as Bside}
                height={"385"}
                onClickPlayback={handleCardShow}
              />
            )}
          </li>
        ))}
      </ul>
      {iFrameShow && (
        <iframe
          title="Programa de radio seleccionat"
          className="sm:w-[800px] w-screen fixed bottom-0 left-0"
          height="60"
          allow="autoplay"
          src={`https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&autoplay=1&feed=/${iFrameShow}`}
        ></iframe>
      )}
    </section>
  );
};

export default LatestShowsFixedHeight;
