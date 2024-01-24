/* eslint-disable react/jsx-no-comment-textnodes */
import { Metadata } from "next";
import About from "../components/Info/About";
import Adress from "../components/Info/Adress";
import Collaborators from "../components/Info/Collaborators";
import ServicesAndClients from "../components/Info/ServicesAndClients";
import ThanksTo from "../components/Info/ThanksTo";

export const metadata: Metadata = {
  title: "Info | dublab BCN",
  description: "Informació d'interés sobre dublab BCN.",
};

const Info = () => {
  return (
    <main className="flex flex-col items-center">
      <div>
        <About />
        <div className="w-fit h-[66px] mt-[72px] ">
          <span className="tracking-wider">
            establert <br /> març de 2015&nbsp; ///&nbsp; març de 2015
            &nbsp;///&nbsp; març de 2015&nbsp; ///&nbsp; març de 2015&nbsp;
            ///&nbsp; març de 2015 &nbsp;///&nbsp; març de 2015&nbsp; ///&nbsp;
            març de 2015
          </span>
        </div>
        <Adress />
        <ServicesAndClients />
        <div className="flex items-baseline gap-[106px]">
          <div>
            <Collaborators />
            <ThanksTo />
          </div>
          <span>Ⓒ 2024 dublab BCN - ALL RIGHTS RESERVED </span>
        </div>
      </div>
    </main>
  );
};

export default Info;
