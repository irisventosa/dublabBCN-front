/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import extractUrlForEmbedPlayer from "@/app/lib/extractUrlForEmbedPlayer";
import useDublabApi from "@/app/lib/hooks/useDublabApi";
import {
  extractDatesForCard,
  formatSlugToGetShowName,
} from "@/app/lib/processSlug";
import { ApiProfile, RadioApiShow } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import useSWR from "swr";
import Button from "../Button";

interface ShowCardProps {
  show: RadioApiShow;
  listPosition?: number;
  height: string;
  onClickPlayback: (show: string) => void;
}

const dublabApi = "https://api.dublab.es";

const ShowCard = ({
  show: { slug, mixcloud_url, tags, host, profile_picture },
  height,
  onClickPlayback,
}: ShowCardProps): React.ReactElement => {
  const { getProfileData } = useDublabApi();
  const showName = formatSlugToGetShowName(slug);

  const formatslugToGetPathName = (slug: string) => {
    const formattedSlug = slug.replace(/[0-9]/g, "").replace(/-+$/, "");

    return formattedSlug;
  };

  const showNamePath = formatslugToGetPathName(slug);

  const showDateforCard = extractDatesForCard(slug);

  const { data: profile } = useSWR<ApiProfile>(showName, getProfileData);

  const showUrl = extractUrlForEmbedPlayer(mixcloud_url);

  const handleShowPlayback = () => {
    onClickPlayback(showUrl!);
  };

  if (host === undefined || host === null) {
    host = profile?.host;
  }

  const [isHovered, setIsHovered] = useState(false);

  const transformedHeight = parseInt(height, 10);

  return (
    <article className={`h-[${height}px] relative leading-[120%] `}>
      <div
        className="relative brightness-50 hover:brightness-90  "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={`${dublabApi}${profile_picture}`}
          alt={`Imatge del b-side de ${showName}`}
          height={transformedHeight}
          width={353}
          className={`overflow-hidden h-[${height}px] w-[353px] relative object-cover b`}
          onClick={handleShowPlayback}
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
      <ul className="flex flex-col absolute p-4 bottom-3 text-white ">
        <li className="mb-3 h-[14px]">
          <time className="text-[12px]">{showDateforCard}</time>
        </li>
        <li>
          <Link href={`/shows/${showNamePath}`}>
            <h2 className="text-[1.375rem] h-5 max-w-[300px]">{showName}</h2>
          </Link>
        </li>
        <li className="h-[17px]">
          <span className={`text-sm`}>Hosted by {host}</span>
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

export default ShowCard;
