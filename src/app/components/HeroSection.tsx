import React from "react";
import PrivacyDisclaimer from "./PrivacyDisclaimer";
import TextBackgorund from "./TextBackground";
import Marquee from "react-fast-marquee";

const HeroSection = (): React.ReactElement => (
  <section className="h-[974px] relative ">
    <TextBackgorund />
    <PrivacyDisclaimer />
    <div className="bottom-0 absolute w-full h-[42px] bg-black flex">
      <Marquee>
        <span className=" text-white tracking-[3.8px] flex whitespace-nowrap justify-center ">
          /// LATEST /// LATEST /// LATEST /// LATEST /// LATEST /// LATEST ///
          LATEST /// LATEST /// LATEST /// LATEST /// LATEST /// LATEST ///
          LATEST /// LATEST /// LATEST /// LATEST /// LATEST /// LATEST
        </span>
      </Marquee>
      r
    </div>
  </section>
);

export default HeroSection;
