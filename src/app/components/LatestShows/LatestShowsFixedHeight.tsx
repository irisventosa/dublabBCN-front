"use client";
import { Bside, RadioApiShow } from "@/app/types";
import { useState } from "react";
import BsideCard from "./BsideCard";
import ShowCard from "./ShowCard";

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
    <section className="pt-[44px] pb-16 ">
      <ul className="flex flex-col items-center sm:px-8 sm:grid sm:grid-cols-4 w-auto sm:gap-y-14 px-4 gap-x-4 gap-12 sm:place-items-center">
        {latestShows.map((show) => (
          <li
            key={show.slug}
            className="max-w-[353px] h-[385px] relative leading-[120%]"
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
