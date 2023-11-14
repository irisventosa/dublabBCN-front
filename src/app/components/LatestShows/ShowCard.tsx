import { ApiProfileShow, RadioApiShow, RadioShow } from "@/app/types";
import Image from "next/image";
import React from "react";

interface ShowCardProps {
  show: RadioApiShow;
  listPosition?: number;
  height: string;
}

const ShowCard = ({
  show: { slug, mixcloud_url, tags, host },
  listPosition,
  height,
}: ShowCardProps): React.ReactElement => {
  const showName = slug.replace(/-/g, " ");
  const styledShowName = showName.replace(/\d/g, "");
  const showDate = slug.match(/\d+/g)?.join(" ");

  return (
    <article
      className={`w-[352px] h-${height} relative overflow-hidden leading-[120%]`}
    >
      <Image
        src="/assets/test.png"
        alt={`Imatge del programa ${styledShowName}`}
        height="353"
        width="353"
        className="overflow-hidden"
      />
      <ul className="flex flex-col absolute pl-4 pb-[16px] bottom-6 text-white ">
        <li className="mb-3 h-[14px]">
          <time className="text-[12px]">{showDate}</time>
        </li>
        <li>
          <h2 className="text-[1.375rem] h-5">{styledShowName}</h2>
        </li>
        <li className="h-[17px]">
          <span className="text-sm ">Hosted by {host}</span>
        </li>
      </ul>
      <ul className="flex gap-[10px] text-[11px] flex-row p-4 absolute bottom-[-8px] text tracking-wide pt-4 ">
        <li>{tags[0]} ///</li>
        <li>{tags[1]} ///</li>
        <li>{tags[2]} </li>
      </ul>
    </article>
  );
};

export default ShowCard;
