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

  const listenToBside = (mixcloudLink: string) => {
    setIFrameShow(mixcloudLink);
  };

  return (
    <>
      <section className="max-h-[750px] min-w-[720px] overflow-y-scroll  scrollbar-hide  bg-black">
        <div className="flex justify-between items-end">
          <ul className="flex">
            <li>
              <Button
                className="uppercase"
                actionOnClick={() => listenToBside(showUrl)}
              >
                Listen
              </Button>
            </li>
            <span className="loader"></span>
          </ul>
          {tags && (
            <ul className="flex gap-[10px] opacity-40 mr-8">
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
        <h2 className="text-5xl h-[58px] mt-[56px]">{name}</h2>
        <section className="flex gap-[140px]">
          <div
            dangerouslySetInnerHTML={description}
            className="text-sm w-[445px] mt-[140px]"
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
