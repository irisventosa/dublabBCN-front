/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import extractUrlForEmbedPlayer from "@/app/lib/extractUrlForEmbedPlayer";
import formatBsideDate from "@/app/lib/formatBsideDate";
import { Bside } from "@/app/types";
import Image from "next/image";
import React from "react";
import Button from "../Button";
import Link from "next/link";

interface ShowCardProps {
  bside: Bside;
  listPosition?: number;
  height: string;
  onClickPlayback: (show: string) => void;
}

const mixcloudEmbedUrl = "https://api.mixcloud.com/";

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

  const nameFontSize = name.length >= 45 ? "[1rem]" : "[1.375rem]";

  const transformedHeight = parseInt(height, 10);

  return (
    <article className={`h-[${height}px] relative leading-[120%]`}>
      <div>
        <Image
          src={picture}
          alt={`Imatge del programa ${name}`}
          height={transformedHeight}
          width={353}
          className={`h-[${height}px] w-[353px] relative object-cover brightness-50 hover:brightness-100 `}
        />
        <Button
          className="absolute bottom-52 left-50 text-zinc-200"
          actionOnClick={handleShowPlayback}
        >
          {`${mixcloudEmbedUrl}${showUrl}embed-html/`}
        </Button>
      </div>
      <ul className="flex flex-col absolute p-4 bottom-7 text-white">
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
      <ul className="h-4 flex gap-[10px] text-[11px] flex-row py-4 absolute text">
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
