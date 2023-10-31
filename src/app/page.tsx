import Image from "next/image";
import { text } from "stream/consumers";
import Header from "./components/Header/Header";
import TextBackgorund from "./components/TextBackground/TextBackground";
import PrivacyDisclaimer from "./components/PrivacyDisclaimer/PrivacyDisclaimer";
import Marquee from "react-fast-marquee";
import ShowCard from "./components/ShowCard/ShowCard";

export default function Home() {
  return (
    <main className="h-screen">
      <TextBackgorund />
      <PrivacyDisclaimer />
      <div className="bottom-0 fixed w-full bg-black">
        <Marquee>
          <span className=" text-white tracking-[3.8px] flex whitespace-nowrap justify-center ">
            /// LATEST /// LATEST /// LATEST /// LATEST /// LATEST /// LATEST
            /// LATEST /// LATEST /// LATEST /// LATEST /// LATEST /// LATEST
            /// LATEST /// LATEST /// LATEST /// LATEST /// LATEST /// LATEST
          </span>
        </Marquee>
      </div>
      <ShowCard />
    </main>
  );
}
