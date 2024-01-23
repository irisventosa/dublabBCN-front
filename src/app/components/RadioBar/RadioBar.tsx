import useAirtimeApi from "@/app/lib/hooks/useAirtimeApi";
import useSWR from "swr";
import AudioPlayer from "./AudioPlayer";
import CurrentAndNextShow from "./CurrentAndNextShow";
import DigitalClock from "./DigitalClock";

const RadioBar = () => {
  const { getLiveRadioData } = useAirtimeApi();

  const { data: LiveRadioData } = useSWR("liveRadioData", getLiveRadioData);

  return (
    <ul className="h-[42px] min-w-full sticky z-50 top-0 flex justify-between items-center py-2  sm:px-8 px-4 flex-row bg-black text-white font-Favorit text-sm font-light uppercase ">
      <li className="hidden sm:block">
        <DigitalClock />
      </li>
      <CurrentAndNextShow liveData={LiveRadioData!} />
      <li>
        <AudioPlayer />
      </li>
    </ul>
  );
};

export default RadioBar;
