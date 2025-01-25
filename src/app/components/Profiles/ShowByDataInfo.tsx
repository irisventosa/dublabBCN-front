"use client";
import { useState } from "react";
import Button from "../Button";
import Tracklist from "../Tracklist";
import ProfileLinks from "./ProfileLinks";
import { usePathname } from "next/navigation";

interface ShowByDataInfoProps {
  showUrl: string;
  description: { __html: string };
  profileName: string;
  tags: string[];
  tracklist: string;
  host: string;
  links: string[];
}

const ShowByDataInfo = ({
  showUrl,
  description,
  profileName,
  tags,
  host,
  tracklist,
  links,
}: ShowByDataInfoProps) => {
  const [iFrameShow, setIFrameShow] = useState("");
  const [isPlaying, setIsPLaying] = useState(false);

  const listenShow = (mixcloudLink: string) => {
    setIFrameShow(mixcloudLink);
    setIsPLaying(!isPlaying);
  };

  const pathname = usePathname();

  const lineColor: string = pathname.includes("/shows") ? "black" : "white";

  const showDateFromUrl = /(\d{2}-\d{2}-\d{2})/;
  const showDate = pathname.match(showDateFromUrl);
  const firstDateElement = showDate![0].replace(/-/g, "/");

  return (
    <>
      <section className="max-h-[700px] pl-4 sm:w-[100vw] overflow-scroll scrollbar-hide sm:pr-[10rem]">
        <div className="flex sm:flex-row flex-col  justify-between items-start sm:items-end">
          <Button
            className="uppercase flex flex-row gap-2"
            actionOnClick={() => listenShow(showUrl)}
          >
            {isPlaying ? (
              <div className="flex flex-row gap-1 pb-2">
                <div className="h-3 w-[2px] bg-black animate-moveLines" />
                <div className="h-3 w-[2px] bg-black animate-moveLines delay-500" />
                <div className="h-3 w-[2px] bg-black animate-moveLines delay-1000" />
              </div>
            ) : (
              <span>►</span>
            )}
          </Button>

          <ul className="flex gap-[10px] pr-4 opacity-100 sm:opacity-80">
            {tags &&
              tags.map((tag, index) => (
                <li
                  key={index}
                  className={`text-${lineColor} text-[11px] sm:border rounded-md pt-[5px] sm:px-2 pb-[2px]`}
                >
                  {tag}
                </li>
              ))}
          </ul>
        </div>
        <div className="w-fit">
          <h2 className="text-5xl sm:h-[58px] mt-[56px]">
            {profileName + " " + firstDateElement}
          </h2>
          <ul className="flex gap-9 sm:gap-[194px] text-[32px]  mt-[20px] sm:mt-[50px]">
            <li>With</li>
            <li className="max-w-[304px] sm:max-w-none">{host} </li>
          </ul>
        </div>
        <section className="flex flex-col-reverse gap-[35px] sm:gap-[140px] max-w-fit">
          <div className="w-fit sm:max-w-none mt-8 gap-[5.1rem] flex flex-row ">
            <ProfileLinks links={links} />
            <div className="flex items-start">
              <p
                className={`text-sm sm:w-fit sm:pr-0 ${
                  links ? "" : "pl-[138px]"
                }`}
              >
                {description.__html}
              </p>
            </div>
          </div>
        </section>
        <section className="flex-col items-end ">
          <Tracklist tracklist={tracklist!}></Tracklist>
        </section>
      </section>
      {iFrameShow && (
        <iframe
          title="Programa de radio seleccionat"
          className=" w-screen fixed bottom-0 left-0"
          height="60"
          allow="autoplay"
          src={`https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&autoplay=1&feed=/${iFrameShow}`}
        ></iframe>
      )}
    </>
  );
};

export default ShowByDataInfo;
