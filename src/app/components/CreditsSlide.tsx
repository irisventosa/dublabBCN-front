/* eslint-disable react/jsx-no-undef */
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useSlideOver } from "../contexts/SlideOverContext";
import Employee from "./Employee";

const CreditsSlideOver = () => {
  const { isOpen, setIsOpen } = useSlideOver();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleSlideover = () => {
    setIsOpen(!isOpen);
    scrollToTop();
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={toggleSlideover}
        className="cursor-pointer uppercase text-white"
      >
        Credits
      </button>
      <div className={`w-full  fixed inset-0 ${isOpen ? "" : "invisible"}`}>
        <div
          className={`w-screen bg-white h-[95%] absolute bottom-0 duration-300 ease-out transition-all ${
            isOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="p-4 text-black">
            <section>
              <div className="mt-[192px] flex justify-between">
                <ul className="flex flex-col gap-[53px] text-[48px] leading-[56px] mt-[42px] ">
                  <li>
                    <Employee
                      charge="Direcció de continguts 001"
                      name="Neus Abellan"
                    />
                  </li>
                  <li>
                    <Employee
                      charge="Direcció tècnica 002"
                      name="Jota Cassone"
                    />
                  </li>
                  <li className="">
                    <Employee
                      charge="Comunicació & producció 003"
                      name="Paca Ribalta"
                    />
                  </li>
                </ul>
                <div className="max-w-[719px] mr-[33px]">
                  <div className="flex justify-between text-sm mt-[-150px] ">
                    <Marquee className="max-w-[536px] pb-[17px]">
                      CREDITOS /// CREDITOS /// CREDITOS /// CREDITOS ///
                      CREDITOS
                    </Marquee>
                  </div>
                  <Image
                    className="object-cover h-[553px] w-[719] "
                    src={"/assets/collserola.jpeg"}
                    width={719}
                    height={553}
                    alt=""
                  ></Image>
                  <div className="flex mt-[18px] justify-between">
                    <ul className="text-[22px] leading-[26.4px]">
                      <li className="w-max">Neus Abellan 001</li>
                      <li className="w-max">Jota Cassone 002</li>
                      <li className="w-max">Paca Ribalta 003</li>
                    </ul>
                    <ul className="text-[22px] leading-[26.4px]">
                      <li className="w-max">Direcció de continguts 001</li>
                      <li className="w-max">Direcció tècnica 002</li>
                      <li className="w-max">Comunicació + producció 003</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex justify-between px-8 mt-[93px] mb-[23px] ">
                <ul className="text-[22px] leading-[26.4px]">
                  <li className="w-max">Neus Abellan 001</li>
                  <li className="w-max">Jota Cassone 002</li>
                  <li className="w-max">Paca Ribalta 003</li>
                </ul>
                <ul className="text-[22px] leading-[26.4px]">
                  <li className="w-max">Direcció de continguts 001</li>
                  <li className="w-max">Direcció tècnica 002</li>
                  <li className="w-max">Comunicació + producció 003</li>
                </ul>
              </div>
            </section>
          </div>
          <div className="absolute cursor-pointer text-gray-600 top-0 w-fit h-fit flex items-center justify-center right-0 mt-5 mr-5">
            <button className="uppercase z-2" onClick={toggleSlideover}>
              close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditsSlideOver;
