import { cookies } from "next/headers";
import React from "react";
import Marquee from "react-fast-marquee";
import PrivacyDisclaimer from "./PrivacyDisclaimer";
import TextBackgorund from "./TextBackground";

const HeroSection = (): React.ReactElement => {
  const cookiesStore = cookies();
  const disclaimerClosed = cookiesStore.get("disclaimerClosed");

  return (
    <section className="h-[348px] relative ">
      <TextBackgorund />
      {!disclaimerClosed && <PrivacyDisclaimer />}
      <div className="bottom-0 absolute w-full h-[42px] bg-black flex">
        <Marquee>
          <span className=" text-white tracking-[3.8px] flex whitespace-nowrap justify-center ">
            {
              "/// LATEST /// LATEST /// LATEST /// LATEST /// LATEST /// LATEST ///"
            }
            {
              "LATEST /// LATEST /// LATEST /// LATEST /// LATEST /// LATEST ///"
            }
            {"LATEST /// LATEST /// LATEST /// LATEST /// LATEST /// LATEST"}
          </span>
        </Marquee>
      </div>
    </section>
  );
};
export default HeroSection;
