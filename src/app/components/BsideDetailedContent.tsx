"use client";
import { useState } from "react";
import Button from "./Button";
import Tracklist from "./Tracklist";

interface BsideInfoProps {
  showUrl: string;
  description: { __html: string };
  name: string;
  tags: string[];
  tracklist: string;
}

const BsideInfo = ({
  showUrl,
  description,
  name,
  tags,
  tracklist,
}: BsideInfoProps) => {
  const [iFrameShow, setIFrameShow] = useState("");
  const [isPlaying, setIsPLaying] = useState(false);

  const listenToBside = (mixcloudLink: string) => {
    setIFrameShow(mixcloudLink);
    setIsPLaying(!isPlaying);
  };

  return (
    <>
      <section className="sm:max-h-[750px] max-h-fit  scrollbar-hide  bg-black">
        <div className="flex justify-between items-end p-5 ">
          <ul className="flex">
            <li className="flex gap-2 leading-normal">
              <Button
                className="uppercase flex flex-row gap-2"
                actionOnClick={() => listenToBside(showUrl)}
              >
                {isPlaying ? (
                  <div className="flex flex-row gap-1 pb-2">
                    <div className="h-3 w-[2px] bg-white animate-moveLines" />
                    <div className="h-3 w-[2px] bg-white animate-moveLines delay-500" />
                    <div className="h-3 w-[2px] bg-white animate-moveLines delay-1000" />
                  </div>
                ) : (
                  <span>►</span>
                )}
              </Button>
            </li>
            <span className="loader"></span>
          </ul>
          {tags && (
            <ul className="flex gap-[10px] opacity-40 mr-4 sm:mr-8">
              {tags.map((tag, index) => (
                <li
                  key={index}
                  className=" text-[11px] border rounded-md pt-[5px] px-2 pb-[3px]"
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </div>
        <section className=" p-5 pt-1 gap-[140px]">
          <h2 className="text-5xl h-[58px]">{name}</h2>
          <div
            dangerouslySetInnerHTML={description}
            className=" text-xs sm:text-sm sm:max-w-[750px] mt-3   "
          />
        </section>
        <section className="flex-col items-end">
          {tracklist && <Tracklist tracklist={tracklist} />}
        </section>
      </section>
      {iFrameShow && (
        <iframe
          title="Programa de radio seleccionat"
          className="sm:w-screen w-screen  fixed bottom-0 left-0"
          height="60"
          allow="autoplay"
          src={`https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&autoplay=1&feed=/${iFrameShow}`}
        ></iframe>
      )}
    </>
  );
};

export default BsideInfo;
