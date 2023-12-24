import Image from "next/image";
import Marquee from "react-fast-marquee";
import AudioPlayer from "./AudioPlayer";
import DigitalClock from "./DigitalClock";
import AudioProvider from "@/app/contexts/AudioContext";

const RadioBar = () => {
  const currentShow = "Abundance";
  const nextLiveShow = {
    name: "Esto es un programa",
    starts: "2023-12-13 21:00:00",
    url: "Leonora",
  };

  const nextShowStartTime = nextLiveShow.starts.split(" ")[1].slice(0, 5);
  //{liveShow.name} - {liveShow.description}

  return (
    <ul className="h-[42px] min-w-full sticky z-50 top-0 flex gap-[91px] justify-between items-center py-2 px-[31px] flex-row bg-black text-white font-Favorit text-sm font-light uppercase ">
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
        <span className="min-w-fit"></span>
        <Marquee className="max-w-[200px]">En directe:{currentShow}</Marquee>
      </li>
      <li className="text-white/60 z-20 flex">
        PRÒXIM:
        {nextLiveShow ? (
          <div>
            <span className="ml-[19px]">{nextShowStartTime}</span>
            <span className="ml-[19px]">{nextLiveShow.name}</span>
            <span className="ml-[19px]">- {nextLiveShow.url}</span>
          </div>
        ) : (
          <span>Holi</span>
        )}
      </li>
      <li>
        <AudioProvider>
          <AudioPlayer />
        </AudioProvider>
      </li>
    </ul>
  );
};

export default RadioBar;
