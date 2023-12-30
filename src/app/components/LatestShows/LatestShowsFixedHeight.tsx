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
    <section className="py-[65px]">
      <ul className="grid grid-cols-4 px-[31px] gap-x-3 gap-y-14">
        {latestShows.map((show) => (
          <li
            key={show.slug}
            className="max-w-[353px] h-[385px] relative overflow-hidden leading-[120%]"
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
          className="w-[800px] fixed bottom-0 left-0"
          height="60"
          allow="autoplay"
          src={`https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&autoplay=1&feed=/${iFrameShow}`}
        ></iframe>
      )}
    </section>
  );
};

export default LatestShowsFixedHeight;
