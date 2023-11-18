import { LiveRadioData } from "@/app/types";
import axios from "axios";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import DigitalClock from "./Clock";
import AudioPlayer from "./AudioPlayer";
import { getLiveRadioData } from "../../lib/radioDataFetching";

const RadioBar = async () => {
  const {
    currentShow: [liveShow],
    nextShow: [nextLiveShow],
  }: LiveRadioData = await getLiveRadioData();

  //const nextShowStartTime = nextLiveShow.starts.split(" ")[1].slice(0, 5);
  //{liveShow.name} - {liveShow.description}

  return (
    <ul className="h-[42px] min-w-full flex gap-[91px] justify-between items-center py-2 px-[31px] flex-row bg-black text-white font-Favorit text-sm font-light uppercase ">
      <li>
        <DigitalClock />
      </li>
      <li className="flex gap-[9px]  ">
        <Image
          className="animate-pulse animate-infinite animate-duration-[2000ms] animate-ease-in-out animate-normal mb-[5px]"
          src={"/assets/Ellipse.svg"}
          alt={"Elipse"}
          width={10}
          height={10}
        />
        <span className="min-w-fit">En directe:</span>
        <Marquee className="max-w-[200px]"></Marquee>
      </li>
      <li className="text-white/60 z-20 ">
        PRÒXIM:
        {nextLiveShow ? (
          <div>
            <span className="ml-[19px]">{nextShowStartTime}</span>
            <span className="ml-[19px]">{nextLiveShow.name}</span>
            <span className="ml-[19px]">{nextLiveShow.description}</span>
          </div>
        ) : (
          <span>Holi</span>
        )}
      </li>
      <li>
        <AudioPlayer />
      </li>
    </ul>
  );
};

export default RadioBar;
