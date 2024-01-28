/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import extractUrlForEmbedPlayer from "@/app/lib/extractUrlForEmbedPlayer";
import formatBsideDate from "@/app/lib/formatBsideDate";
import { Bside } from "@/app/types";
import Image from "next/image";
import React, { useState } from "react";
import Button from "../Button";
import Link from "next/link";

interface ShowCardProps {
  bside: Bside;
  listPosition?: number;
  height: string;
  onClickPlayback: (show: string) => void;
}

const BsideCard = ({
  bside: { name, mixcloud_url, tags, picture, date, slug },
  height,
  onClickPlayback,
}: ShowCardProps): React.ReactElement => {
  const showDateforCard = formatBsideDate(date);
  const showUrl = extractUrlForEmbedPlayer(mixcloud_url);

  const handleShowPlayback = () => {
    onClickPlayback(showUrl!);
  };

  const nameFontSize = name.length >= 45 ? "[0.8rem]" : "[1.375rem]";
  const bottomClass = name.length > 15 ? "bottom-8" : "bottom-0";

  const [isHovered, setIsHovered] = useState(false);
  const transformedHeight = parseInt(height, 10);

  return (
    <article className={`h-[${height}px] relative leading-[120%]`}>
      <div
        className="relative brightness-50 hover:brightness-90  "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={picture}
          alt={`Imatge del programa ${name}`}
          height={transformedHeight}
          width={353}
          className={`h-[${height}px] w-[353px] relative object-cover brightness-50 hover:brightness-100 `}
        />
        {isHovered && (
          <Button
            actionOnClick={handleShowPlayback}
            className="absolute inset-0 flex items-center justify-center  "
          >
            <Image
              src={"/assets/playwhite.svg"}
              width={50}
              height={50}
              alt={""}
            />
          </Button>
        )}
      </div>
      <ul className={`flex flex-col absolute p-4 text-white ${bottomClass}`}>
        <li className="mb-3 h-[14px]">
          <time className="text-[12px]">{showDateforCard}</time>
        </li>
        <li>
          <Link href={`/b-sides/${slug}`}>
            <h2 className={`text-${nameFontSize} h-5 max-w-[300px] `}>
              {name}
            </h2>
          </Link>
        </li>
      </ul>
      <ul className="h-4 flex gap-[10px] text-[11px] flex-row py-4 px-4 absolute text">
        {tags.map((tag, index, array) => (
          <>
            <li>{tag}</li>
            {index !== array.length - 1 && <li>&nbsp;///&nbsp;</li>}
          </>
        ))}
      </ul>
    </article>
  );
};

export default BsideCard;
