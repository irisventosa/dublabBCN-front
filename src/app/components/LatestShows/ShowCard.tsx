import Image from "next/image";
import React from "react";

const ShowCard = (): React.ReactElement => {
  return (
    <article className="w-[352px] h-[385px] relative bg-sky-800 leading-[120%]">
      <Image src="/assets/test.png" alt={""} height="353" width="353" />
      <ul className="flex flex-col absolute pl-4 pb-[11px] bottom-8 text-white ">
        <li>
          <time className="text-xs mb-[7px] ">02/02/2023</time>
        </li>
        <li>
          <h2 className="text-[1.375rem]">Show name</h2>
        </li>
        <li>
          <span className="text-sm">artist name</span>
        </li>
      </ul>
      <ul className="flex gap-[10px] text-[11px] flex-row p-4 absolute bottom-[-8px] text tracking-wide pt-4 ">
        <li>funk ///</li>
        <li>soul ///</li>
        <li>gqom </li>
      </ul>
    </article>
  );
};

export default ShowCard;
