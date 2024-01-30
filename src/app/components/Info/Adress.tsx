/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const Adress = () => {
  return (
    <div>
      <div className="w-[1045px] h-auto flex gap-8 pt-[75px]">
        <div className="h-[600px]">
          <Image
            src={"/assets/hangar_outside.jpg"}
            alt="Antena del collserola"
            width={447}
            height={588}
            className="h-full object-cover w-full"
          />
        </div>
        <div className="flex flex-col justify-between">
          <p className="text-[22px]">
            Ens&nbsp;&nbsp;&nbsp; pots&nbsp;&nbsp;&nbsp; trobar&nbsp;&nbsp; a
            &nbsp; hangar <br />
            carrer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Emilia Coranty 16 <br />
            08018&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Barcelona ES
            <br />
            EMAIL:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; es&nbsp;&nbsp;&nbsp;&nbsp;
            @&nbsp;&nbsp;&nbsp; dublab.com <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp; dublab.com
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; dublab.com
          </p>
          <span className="relative w-fit left-[664px] text-[22px] ">
            es <br /> es
          </span>
          <div className=" w-fit text-[22px] opacity-0 hover:opacity-100 transition duration-200 relative left-[163px] mt-[10px] ">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;41°22'19.3"N 2°12'09.7"E
            <br />
            &nbsp;&nbsp;&nbsp;41°22'19.3"N 2°12'09.7"E <br />
            41°22'19.3"N 2°12'09.7"E
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adress;
