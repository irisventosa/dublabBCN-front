import Image from "next/image";
import About from "../components/Info/About";
import Collaborators from "../components/Info/Collaborators";
import ServicesAndClients from "../components/Info/ServicesAndClients";
import ThanksTo from "../components/Info/ThanksTo";

const Info = () => {
  return (
    <main className="flex flex-col items-center">
      <div>
        <About />
        <div className="w-[1266px] h-[66px] mt-[72px] ">
          <span className="tracking-wider">
            establert <br /> març de 2015 /// març de 2015 /// març de 2015 ///
            març de 2015 /// març de 2015 /// març de 2015 /// març de 2015
          </span>
        </div>
        <div>
          <div className="w-[1045px] flex gap-8 pt-[75px]">
            <Image
              src={"/assets/collserola.jpeg"}
              alt="Antena del collserola"
              width={447}
              height={588}
            />
            <div className="flex flex-col justify-between">
              <p className="text-[22px]">
                Ens&nbsp;&nbsp;&nbsp; pots&nbsp;&nbsp;&nbsp; trobar&nbsp;&nbsp;
                a &nbsp; hangar <br />
                carrer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp; Emilia Coranty 16 <br />
                08018&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Barcelona ES
                <br />
                EMAIL:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; es&nbsp;&nbsp;&nbsp;&nbsp;
                @&nbsp;&nbsp;&nbsp; dublab.com <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp; dublab.com
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                dublab.com
              </p>
              <span className="relative w-fit">
                es <br /> es
              </span>
              <div className=" w-fit text-[22px] hover:opacity-100 transition duration-200 relative left-[100px]  ">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;41.412033° N, 2.202685° E
                <br />
                &nbsp;&nbsp;&nbsp;41.412033° N, 2.202685° E <br />
                41.412033° N, 2.202685° E
              </div>
            </div>
          </div>
        </div>
        <ServicesAndClients />
        <Collaborators />
        <ThanksTo />
      </div>
    </main>
  );
};

export default Info;
